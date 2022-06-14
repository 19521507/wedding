import React, { useState,useEffect } from "react"
//import TodoItem from "./ToDoItem"
import "./App.css"
const App = (props) => {
  const [Names, SetNames] = useState("")
  const [currentname, Setcurrentname] = useState("")
  const [currentdate, Setcurrentdate] = useState("")
  const [currentshift, Setcurrentshift] = useState("")
  const [currentnotable, Setcurrentnotable] = useState("")
  const [currentmenu, Setcurrentmenu] = useState("")
  const [currentservices, Setcurrentservices] = useState("")
  const [currentphone, Setcurrentphone] = useState("")
  const [currentmail, Setcurrentmail] = useState("")
  const [currenthall, Setcurrenthall] = useState("")
  
  useEffect(() => {
    readData()
  }, [])
  
  const readData = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/data", requestOptions)
      .then(response => response.text())
      .then(result => {
        SetNames(JSON.parse(result).Names)
      })
      .catch(error => console.log('error', error));
  }


  const addData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    
    var raw1 = JSON.stringify({ "Date": currentdate,"Shift": currentshift,"Hall": currenthall,"NoTable": currentnotable,
    "Menu": currentmenu, "Service": currentservices,"Name": currentname,"Phone": currentphone,"Mail": currentmail  });
    Setcurrentdate('')
    
    Setcurrentshift('')
    
    Setcurrenthall('')
    
    Setcurrentnotable('')
 
    Setcurrentmenu('')

    Setcurrentservices('')
   
    Setcurrentname('')
    
    Setcurrentphone('')
 
    Setcurrentmail('')
   
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw1,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/data", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        readData()
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className="todo-list">
      <h1> list </h1>

      <h4> Date </h4>
      <input value={currentdate} onChange={(event) => {
        Setcurrentdate(event.target.value);
      }}
      />
      <h4> Shift </h4>
      <input value={currentshift} onChange={(event) => {
        Setcurrentshift(event.target.value);
      }}
      />
      <h4> Hall </h4>
      <input value={currenthall} onChange={(event) => {
        Setcurrenthall(event.target.value);
      }}
      />
      <h4> Number of table </h4>
      <input value={currentnotable} onChange={(event) => {
        Setcurrentnotable(event.target.value);
      }}
      />
      <h4> Menu </h4>
      <input value={currentmenu} onChange={(event) => {
        Setcurrentmenu(event.target.value);
      }}
      />
      <h4> Services </h4>
      <input value={currentservices} onChange={(event) => {
        Setcurrentservices(event.target.value);
      }}
      />
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

      <button onClick={() => addData()}>Add</button>
     
     
    </div>
  )

}


export default App;
