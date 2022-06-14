import React, { useState,useEffect } from "react"
import TodoItem from "./ToDoItem"
import "./booking.css"

const App = (props) => {
  const [Names, SetNames] = useState("")
  const [currentGroom, SetcurrentGroom] = useState("")
  const [currentBRIDE, SetcurrentBRIDE] = useState("")
  const [currentDEPOSITS, SetcurrentDEPOSITS] = useState("")
  const [currentPHONE, SetcurrentnoPHONE] = useState("")
  const [currentTABLE, SetcurrenTABLE] = useState("")
  const [currentDATE, SetcurrentDATE] = useState("")
  const [currentLOB, SetcurrentLOB] = useState("")
  const [currentshift, Setcurrentshift] = useState("")
 
  
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
    

    
    var raw1 = JSON.stringify({ "GROOM_NAME": currentGroom,"BRIDE_NAME": currentBRIDE,"DEPOSITS": currentDEPOSITS,"PHONE": currentPHONE,
    "TABLE": currentTABLE,"DATE": currentDATE,"LOBBY":currentLOB,"SHIFTS":currentshift  });
    SetcurrentGroom('')
    SetcurrentBRIDE('')
    SetcurrentDEPOSITS('')
    SetcurrentnoPHONE('')
    SetcurrenTABLE('')
    SetcurrentDATE('')
    SetcurrentLOB('')
    Setcurrentshift('')

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
    <body>
  <div className="booking">
        <img class="hinhbook" />
        <div class="menu">
        <ul>
        <li ><a id="wd">wd</a></li>
        <li ><a id="home" href="/home">HOME</a></li>
        <li ><a id="news" href="/news">NEWS</a></li>
        <li><a id="book" href="/book">BOOKING</a></li>
        <li><a id="hall" href="/hall">HALL</a></li>
        <li><a id="contact" href="/contact">CONTACT</a></li>
        <h2 id="look"></h2>
          </ul> 
          </div>
          
          <div>
              <h2 id="booking"> Booking </h2>
          </div>
                <div class="book">
                    <div id="menu">
                    
             
            <div id="date">
                <h4 > Date </h4>
                <input value={currentDATE} onChange={(event) => {
                    SetcurrentDATE(event.target.value);
                }}
                />
                </div>
                <div id="LOBBY">
                <h4 > LOBBY </h4>
                <input value={currentLOB} onChange={(event) => {
                    SetcurrentLOB(event.target.value);
                }}
                />
                </div>
                <div id="SHIFT">
                <h4 > SHIFT </h4>
                <input value={currentshift} onChange={(event) => {
                    Setcurrentshift(event.target.value);
                }}
                />
                </div>
                
                            
              
     
      <div id="table">
      <h4> Number of table </h4>
      <input value={currentTABLE} onChange={(event) => {
        SetcurrenTABLE(event.target.value);
      }}
      />
      </div>
          <div id="GROOM">
      <h4> GROOM_NAME </h4>
      <input value={currentGroom} onChange={(event) => {
        SetcurrentGroom(event.target.value);
      }}
      />
      </div>
      <div id="BRIDE">
      <h4> BRIDE_NAME </h4>
      <input value={currentBRIDE} onChange={(event) => {
        SetcurrentBRIDE(event.target.value);
      }}
      />
      </div>
      <div id="phone">
      <h4> Phone </h4>
      <input value={currentPHONE} onChange={(event) => {
        SetcurrentnoPHONE(event.target.value);
      }}
      />
      </div>
      <div id="DEPOSITS">
      <h4> DEPOSITS </h4>
      <input value={currentDEPOSITS} onChange={(event) => {
        SetcurrentDEPOSITS(event.target.value);
      }}
      />
      </div>
      <button class="clickbook" onClick={() => addData()}>Add</button>
        </div>
        </div>
        </div>
        </body>
     
  )

}


export default App;