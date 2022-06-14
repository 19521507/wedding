from os import name
import sqlite3
import constant
import pyodbc 
import pymssql 
import json

server = '35.240.144.125' 
database = 'wedding' 
username = 'sqlserver' 
password = 'Jj:VKuMz2bA,[."@' 

from datetime import date, datetime
class ComplexEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.strftime('%Y-%m-%d %H:%M:%S')
        elif isinstance(obj, date):
            return obj.strftime('%Y-%m-%d')
        else:
            return json.JSONEncoder.default(self, obj)

    

def add_to_list(GROOM,BRIDE,DEPOSITS,PHONE,TABLE,DATE):
    try:
        conn = pymssql.connect(server = '35.240.144.125',database  = 'wedding'  ,user  = 'sqlserver',password = 'Jj:VKuMz2bA,[."@')
        # Once a connection has been established, we use the cursor
        # object to execute queries
        c = conn.cursor()
        # Keep the initial status as Not Started
        c.execute('insert into CUSTOMER(GROOM_NAME,BRIDE_NAME,DEPOSITS,PHONE,NO_TABLE,DAT) values(%s, %s,%s,%s, %s,%s)', 
        (GROOM,BRIDE,DEPOSITS,PHONE,TABLE,DATE))
       
        
        # We commit to save the change
        conn.commit()
        return {"GROOM_NAME":GROOM,"BRIDE":BRIDE,"DEPOSITS":DEPOSITS,"PHONE":PHONE,"TABLE":TABLE,"DATE":DATE}
    except Exception as e:
        print('Error: ', e)
        return None


def get_all_items():
    try:
        conn = pymssql.connect(server = '35.240.144.125' ,database = 'wedding' ,user = 'sqlserver' ,password = 'Jj:VKuMz2bA,[."@' )
        c = conn.cursor()
        c.execute('select * from CUSTOMER')
        rows = c.fetchall()
        return { "count": len(rows), "data": rows }
    except Exception as e:
        print('Error: ', e)
        return None

#thêm vào service
def add_to_contact(Name,Phone,Mail,Content):
    try:
        conn = sqlite3.connect(constant.DB_PATH)
        # Once a connection has been established, we use the cursor
        # object to execute queries
        c = conn.cursor()
        # Keep the initial status as Not Started
        c.execute('insert into Contact(Name,Phone,Mail,Content) values(?,?,?,?)', 
        (Name,Phone,Mail,Content))
        # We commit to save the change
        conn.commit()
        return {"Name":Name,"Phone":Phone,"Mail":Mail,"Content":Content}
    except Exception as e:
        print('Error: ', e)
        return None


def get_all_contact():
    try:
        conn = sqlite3.connect(constant.DB_PATH)
        c = conn.cursor()
        c.execute('select * from Contact')
        rows = c.fetchall()
        return { "count": len(rows), "data": rows }
    except Exception as e:
        print('Error: ', e)
        return None
