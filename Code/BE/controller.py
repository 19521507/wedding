from typing import Container
import flask
from flask import request, jsonify, Response
import json
from flask_ngrok import run_with_ngrok
from flask_cors import CORS, cross_origin
import pandas as pd
import sqlite3
import constant as constant
import service as service
app = flask.Flask(__name__)
app.config["DEBUG"] = True
CORS(app)
run_with_ngrok(app)




@app.route('/data', methods=['POST'])
def add_item():
    # Get item from the POST body
    req_data = request.get_json()
    GROOM = req_data['GROOM_NAME'] 
    BRIDE = req_data['GROOM_NAME']
    DEPOSITS = req_data['DEPOSITS']
    PHONE = req_data['PHONE']
    TABLE = req_data['TABLE']
    DATE = req_data['DATE']

    
    # Add item to the list
    res_data = service.add_to_list(GROOM,BRIDE,DEPOSITS,PHONE,TABLE,DATE)

   

    # Return response
    response = Response(json.dumps(res_data), mimetype='application/json')
    return response
@app.route('/data', methods=['GET'])
def get_all_items():
    # Get items from the helper
    res_data = service.get_all_items()
    # Return response
    response = Response(json.dumps(res_data), mimetype='application/json')
    return response
#thêm vào controller.py
@app.route('/contact', methods=['POST'])
def add_contact():
    # Get item from the POST body
    req_data = request.get_json()
    
    Name = req_data['Name']
    Phone = req_data['Phone']
    Mail = req_data['Mail']
    Content=req_data['Content']

    # Add item to the list
    res_data = service.add_to_contact(Name,Phone,Mail,Content)

   

    # Return response
    response = Response(json.dumps(res_data), mimetype='application/json')
    return response
@app.route('/contact', methods=['GET'])
def get_all_contact():
    # Get items from the helper
    res_data = service.get_all_contact()
    # Return response
    response = Response(json.dumps(res_data), mimetype='application/json')
    return response


if __name__ == '__main__':
    app.run()