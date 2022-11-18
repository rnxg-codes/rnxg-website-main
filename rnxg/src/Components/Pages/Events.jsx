import React from 'react'
import './Events.css'
import { event } from './eventss';
import Navbar from '../Home/Navbar';
import {  animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';

import Footer from '../Home/Footer';
export default function Events() {
  return (
    <>
 <div className="main-events" id='top1'>
<Navbar/>

    <div className="Events-top">
           
<div className="Events-top-rig">
<h2>RNXG <span>EVENTS</span></h2>
<h1>The events that actually help you grow !</h1>
<p>RNXG not only participate in competitions, but also hosts its own events. Let's have a look at some of the events that we have arranged.</p>
<a href='#random'>
<button>Explore <span><svg xmlns="http://www.w3.org/2000/svg" class="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path class="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round"></path></svg></span></button>
</a>
</div>
{/* <div className="Events-top-lef">

</div>    */}

    </div>
    <div className="Events-between" id='random'>
        <div className="Events-bet-top">
<h1>Upcoming events for you.</h1>
<p>Eager to start new chapter of your life... <br /> come on let's start with us</p>
        </div>
        <div className="Events-bet-down">
<div className="event-card">
    <div className="prewiew">
                              <img rel="preload" src="https://ik.imagekit.io/wqweoudym/Poster_v5_bCRHRCo-l.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668784248411" alt="" />
    </div>
    <div className="info">
<h3>Open House 2K22 </h3>
    
    <div className="time-share">
<div className="time">
<svg viewBox="0 0 19 18"  focusable="false" class="chakra-icon css-1fbem62"><path d="M6.72656 2.17188V4.32073" stroke-width="1.07443" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.457 2.17188V4.32073" stroke-width="1.07443" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.5 7.25H15.6768" stroke-width="1.07443" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.0377 6.82361V12.912C16.0377 15.0609 14.9632 16.4935 12.4562 16.4935H6.72596C4.21896 16.4935 3.14453 15.0609 3.14453 12.912V6.82361C3.14453 4.67476 4.21896 3.24219 6.72596 3.24219H12.4562C14.9632 3.24219 16.0377 4.67476 16.0377 6.82361Z" stroke-width="1.07443" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.58858 10.5456H9.59502"  stroke-width="1.07443" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.93624 10.5456H6.94267"  stroke-width="1.07443" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.93624 12.6941H6.94267" stroke-width="1.07443" stroke-linecap="round" stroke-linejoin="round"></path></svg>
<p> Monday 21, 2022</p>

</div>
{/* <Link
    activeClass="active"
    to={{pathname:"/registations"}}
   
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>       <button>
    Register
</button>   </Link> */}

    </div>
</div>
</div>
        </div>
    </div>
    <div className="Events-Bottom">
        <div className="event-bot-top">
            <h1><center>If you missed something, access it right here</center></h1>

            {/* <div className="labels">
                <button>RMAGEDDON 2020</button>
                <button>Technovation</button>

              
            </div> */}
        </div>
        <div className="old-events">

        {event.map((event)=>{
      return           <div className="old-event-card">
                <div className="top-img">
                <iframe width="372" height="209" src={event.Youtube} allowfullscreen></iframe>
                </div>
                <div className="down-content">
                    <h3>{event.Event}{event.Year}</h3>
                   <a href={event.Youredirect}>
                       <button>
                    <svg stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 1024 1024" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z"></path></svg>
                   <span>Watch Now</span>
                    </button>
                       </a> 
                </div>
            </div>

      
  })}






  
        </div>
    </div>
    <div className="E4">
       <Footer/>  
    </div>
    
 </div>
    </>
  )
}
