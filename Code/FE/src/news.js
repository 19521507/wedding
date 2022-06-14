import React, { useState, useEffect } from "react"
import "./News.css"

const News = () => {
return (
  <body>
    <div>
        <img class="image2" />
        <h2 class="dau">CATEGORY ARCHIVES</h2>
        </div>
      <div class="menu1">
        <ul>
        <li ><a id="wd">wd</a></li>
        <li><a id="home1" href="/home">HOME</a></li>
        <li><a id="news1" href="/news">NEWS</a></li>
        <li><a id="book1" href="/book">BOOKING</a></li>
        <li><a id="hall1" href="/hall">HALL</a></li>
        <li><a id="contact1" href="/contact">CONTACT</a></li>
        <h2 id="look1"></h2>
        </ul>  
    </div>
    <div class="infor1">
      <img class="hinh2" />
      <h2 id="one">Refer to the decor styles suitable for outside weddings</h2>
      <h2 id="two">The organization of an outside wedding is not limited to style(...)</h2>
    </div>
    <div class="infor2">
      <img class="hinh3" />
      <h2 id="three">Refer to the decor styles suitable for outside weddings</h2>
      <h2 id="four">The organization of an outside wedding is not limited to style(...)</h2>
    </div>
    </body>
    /*{/*</div>{<h2 id="3">Review the mistakes to avoid when organizing a wedding party</h2>
    <h2 id="4">The wedding ceremony or wedding reception is always an important event in (...)</h2>}*/

  )
}
export default News; 