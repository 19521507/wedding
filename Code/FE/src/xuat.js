import React, { useState, useEffect } from "react"
import TodoItem from "./ToDoItem"
import "./App.css"
const App = (props) => {
  const [datas, setItems] = useState([])
  const [currentItem, setCurrentItem] = useState("")
  const [currentItem1, setCurrentItem1] = useState("")
  const [currentItem2, setCurrentItem2] = useState("")
  const [currentItem3, setCurrentItem3] = useState("")
  useEffect(() => {
    readItem()
  }, [])

  const readItem = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/item", requestOptions)
      .then(response => response.text())
      .then(result => {
        setItems(JSON.parse(result).phone)

      })
      .catch(error => console.log('error', error));
  }

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

    fetch("http://127.0.0.1:5000/item", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        readItem()
      })
      .catch(error => console.log('error', error));
  }
  const deleteItem = (deleteItem) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "item": deleteItem });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/item", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        readItem()
      })
      .catch(error => console.log('error', error));
  }
  const addItem = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "phone": currentItem ,"name": currentItem1,"mail": currentItem2 ,"numoftable": currentItem3 });
    setCurrentItem('')
    setCurrentItem1('')
    setCurrentItem2('')
    setCurrentItem3('')
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/item", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        readItem()
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className="todo-list">
      <h1> Danh sách các cầu thủ </h1> 
      {
        datas && datas.map(data => {
          return <TodoItem
            phone={data[0]}
            name={data[1]}
            mail={data[2]}
            numoftbale={data[3]}
          />
        })
      }
    </div>
  )

}

export default App;