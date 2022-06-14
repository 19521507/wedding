import React, { useState,useEffect } from "react"
//import TodoItem from "./ToDoItem"
import "./App.css"
const App = (props) => {
  const [Names, SetNames] = useState("")
  const [currentname, Setcurrentname] = useState("")
  const [currentphone, Setcurrentphone] = useState("")
  const [currentmail, Setcurrentmail] = useState("")
  const [currentcontent, Setcurrentcontent] = useState("")
  useEffect(() => {
    readData()
  }, [])
  
  const readData = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/contact", requestOptions)
      .then(response => response.text())
      .then(result => {
        SetNames(JSON.parse(result).Names)
      })
      .catch(error => console.log('error', error));
  }
/*
  const updateItem = (updateItem, currentStatus) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    if (currentStatus === 'Completed') {
      currentStatus = 'Not Started'
    } else {
      currentStatus = 'Completed'
    }
    var raw = JSON.stringify({ "item": updateItem, "status": currentStatus });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/data", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        readItem()
      })
      .catch(error => console.log('error', error));
  }*/

  const addData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    
    var raw1 = JSON.stringify({"Name": currentname,"Phone": currentphone,"Mail": currentmail,"Content":currentcontent  });
    
   
    Setcurrentname('')
    
    Setcurrentphone('')
 
    Setcurrentmail('')
    Setcurrentcontent('')
   
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw1,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/contact", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        readData()
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className="todo-list">
      <h1> Contact </h1>
      <h4> Name </h4>
      <input value={currentname} onChange={(event) => {
        Setcurrentname(event.target.value);
      }}
      />
      <h4> Phone </h4>
      <input value={currentphone} onChange={(event) => {
        Setcurrentphone(event.target.value);
      }}
      />
      <h4> Mail </h4>
      <input value={currentmail} onChange={(event) => {
        Setcurrentmail(event.target.value);
      }}
      />
      <h4> Content </h4>
      <input value={currentcontent} onChange={(event) => {
        Setcurrentcontent(event.target.value);
      }}
      />
      <button onClick={() => addData()}>Add</button>
    </div>
  )

}


export default App;
