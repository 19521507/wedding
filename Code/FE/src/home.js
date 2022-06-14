import React, { useState, useEffect } from "react"
import "./App.css"

const Home = () => {
return (
  <div>
      <body>
        <img class="image" src="nen.png"/>
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
          <div class="infor">
          <nav>
          <h2 id="mot">Your sweet day</h2>   
          <h2 id="hai">your best wedding app</h2>    
          </nav>   
        </div>
        </body>
    </div>
  )
}
export default Home;