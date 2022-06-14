import React, { useState, useEffect } from "react"
import "./halls.css"
const hall = () => {
return (
      <body>
    <div>
        <img class="image3" />
        <div class="ngang">
        <hr class="line1"></hr>
        <hr class="line2"></hr>
        <h2 class="wdhall">W&D</h2>
        </div>
        </div>
      <div class="menu1">
        <ul>
        <li><a id="wd">wd</a></li>
        <li><a id="home1" href="/home">HOME</a></li>
        <li><a id="news1" href="/news">NEWS</a></li>
        <li><a id="book1" href="/book">BOOKING</a></li>
        <li><a id="hall1" href="/hall">HALL</a></li>
        <li><a id="contact1" href="/contact">CONTACT</a></li>
        <h2 id="look1"></h2>
        </ul>  
    </div>
    <div class="inforhall">
    <img class="hinhhall1" />
      <h2 id="hallone">
W&D III (3rd-floor lobby) with a total area of 1,500m² Led screen size (9m x 4.5m) a cozy but equally luxurious party space, here the stage is placed in the middle of the room to increase intimacy. The banquet hall area can be expanded flexibly to suit parties Popular from 300 guests (30 tables) to 1,800 guests (180 tables) with a capacity of 300 - 1,800 others.
</h2>
<img class="hinhhall2" />
      <h2 id="halltwo">
 W&D II - IDEAL CONFERENCE SPACE can accommodate about 20 -100 guests, luxuriously designed, cozy, suitable for Conferences / Seminars, Product Introduction, Meetings, business receptions, luxurious guests … the party will become more professional and meaningful than ever.
 </h2>
 <img class="hinhhall3" />
      <h2 id="hallthree">

      W&D IV is located on the rooftop of the building with a capacity of about 100 guests and is specially designed to be close to nature, the atmosphere is fresh but equally luxurious. Suitable for Weddings, Weddings, Birthdays, Fun. 
      </h2>
      <img class="hinhhall4" />
      <h2 id="hallfour">


      W&D I Stunning Wedding Ballrooms & Halls has a capacity of about 200 guests (20 tables), luxuriously designed from the stairs, the reception hall to the banquet room, which is really suitable for Weddings, Meetings, Meetings, bringing a new atmosphere. very lively atmosphere.     
       </h2>
    </div>
    </body>
    )
    }
export default hall;