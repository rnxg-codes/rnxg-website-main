import React from 'react'
import './Events.css'
import { event } from './eventss';
import Navbar from '../Home/Navbar';
import { Link, animateScroll as scroll } from "react-scroll";

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
<Link
    activeClass="active"
    to="random"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>
<button>Explore <span><svg xmlns="http://www.w3.org/2000/svg" class="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path class="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round"></path></svg></span></button>
</Link>
</div>
{/* <div className="Events-top-lef">

</div>    */}

    </div>
    <div className="Events-between" id='random'>
        <div className="Events-bet-top">
<h1>Upcoming events for you.</h1>
<p><center>Rmageddon is a intra college robotics event organised by first year team.</center><center>  Here we organise workshops and conduct various compititions.</center></p>
        </div>
        <div className="Events-bet-down">
<div className="event-card">
    <div className="prewiew">
<img  src="https://ik.imagekit.io/wqweoudym/rmageddonlogoB_ujAIM1sFq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651256594470" alt="" />
    </div>
    <div className="info">
<h3>Rmageddon(2022)</h3>
    
    <div className="time-share">
<div className="time">
<svg viewBox="0 0 19 18"  focusable="false" class="chakra-icon css-1fbem62"><path d="M6.72656 2.17188V4.32073" stroke-width="1.07443" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.457 2.17188V4.32073" stroke-width="1.07443" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.5 7.25H15.6768" stroke-width="1.07443" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.0377 6.82361V12.912C16.0377 15.0609 14.9632 16.4935 12.4562 16.4935H6.72596C4.21896 16.4935 3.14453 15.0609 3.14453 12.912V6.82361C3.14453 4.67476 4.21896 3.24219 6.72596 3.24219H12.4562C14.9632 3.24219 16.0377 4.67476 16.0377 6.82361Z" stroke-width="1.07443" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.58858 10.5456H9.59502"  stroke-width="1.07443" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.93624 10.5456H6.94267"  stroke-width="1.07443" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.93624 12.6941H6.94267" stroke-width="1.07443" stroke-linecap="round" stroke-linejoin="round"></path></svg>
<p>May 7, 2022 · Coming Soon</p>

</div>
<button>
    <svg viewBox="0 0 24 24"  focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><path d="M16.2493 14.0002C15.6879 14.003 15.1343 14.1318 14.6293 14.3771C14.1244 14.6225 13.681 14.9781 13.3318 15.4177L7.84928 11.9902C8.04909 11.3453 8.04909 10.655 7.84928 10.0102L13.3318 6.58265C13.8882 7.27169 14.6706 7.74154 15.5403 7.90896C16.41 8.07638 17.3109 7.93058 18.0834 7.49737C18.8559 7.06417 19.4502 6.37152 19.7609 5.54214C20.0716 4.71276 20.0787 3.80017 19.781 2.96603C19.4833 2.13189 18.8999 1.43005 18.1343 0.984826C17.3687 0.539604 16.4702 0.379741 15.5979 0.533555C14.7257 0.68737 13.9361 1.14493 13.3689 1.82519C12.8018 2.50545 12.4937 3.3645 12.4993 4.25015C12.5028 4.58554 12.5533 4.91877 12.6493 5.24015L7.16678 8.66765C6.68277 8.05834 6.02119 7.61469 5.27375 7.3982C4.52631 7.18171 3.73003 7.2031 2.99529 7.45941C2.26055 7.71572 1.62375 8.19426 1.17315 8.82868C0.722547 9.4631 0.480469 10.222 0.480469 11.0002C0.480469 11.7783 0.722547 12.5372 1.17315 13.1716C1.62375 13.8061 2.26055 14.2846 2.99529 14.5409C3.73003 14.7972 4.52631 14.8186 5.27375 14.6021C6.02119 14.3856 6.68277 13.942 7.16678 13.3327L12.6493 16.7602C12.5533 17.0815 12.5028 17.4148 12.4993 17.7502C12.4993 18.4918 12.7192 19.2169 13.1313 19.8335C13.5433 20.4502 14.129 20.9309 14.8142 21.2147C15.4994 21.4985 16.2534 21.5728 16.9809 21.4281C17.7083 21.2834 18.3765 20.9263 18.9009 20.4018C19.4254 19.8774 19.7825 19.2092 19.9272 18.4817C20.0719 17.7543 19.9977 17.0003 19.7138 16.3151C19.43 15.6299 18.9494 15.0442 18.3327 14.6321C17.716 14.2201 16.991 14.0002 16.2493 14.0002ZM16.2493 2.00015C16.6943 2.00015 17.1293 2.13211 17.4993 2.37935C17.8693 2.62658 18.1577 2.97798 18.328 3.38912C18.4983 3.80025 18.5429 4.25265 18.456 4.68911C18.3692 5.12556 18.1549 5.52648 17.8403 5.84114C17.5256 6.15581 17.1247 6.3701 16.6882 6.45692C16.2518 6.54374 15.7994 6.49918 15.3882 6.32888C14.9771 6.15859 14.6257 5.8702 14.3785 5.50019C14.1312 5.13018 13.9993 4.69516 13.9993 4.25015C13.9993 3.65342 14.2363 3.08112 14.6583 2.65916C15.0802 2.23721 15.6525 2.00015 16.2493 2.00015ZM4.24928 13.2502C3.80427 13.2502 3.36926 13.1182 2.99925 12.871C2.62924 12.6237 2.34085 12.2723 2.17055 11.8612C2.00026 11.4501 1.9557 10.9977 2.04252 10.5612C2.12933 10.1247 2.34362 9.72383 2.65829 9.40916C2.97296 9.09449 3.37387 8.8802 3.81033 8.79339C4.24679 8.70657 4.69919 8.75113 5.11032 8.92142C5.52145 9.09172 5.87286 9.38011 6.12009 9.75012C6.36732 10.1201 6.49928 10.5551 6.49928 11.0002C6.49928 11.5969 6.26223 12.1692 5.84027 12.5911C5.41832 13.0131 4.84602 13.2502 4.24928 13.2502ZM16.2493 20.0002C15.8043 20.0002 15.3693 19.8682 14.9992 19.621C14.6292 19.3737 14.3408 19.0223 14.1706 18.6112C14.0003 18.2001 13.9557 17.7477 14.0425 17.3112C14.1293 16.8747 14.3436 16.4738 14.6583 16.1592C14.973 15.8445 15.3739 15.6302 15.8103 15.5434C16.2468 15.4566 16.6992 15.5011 17.1103 15.6714C17.5215 15.8417 17.8729 16.1301 18.1201 16.5001C18.3673 16.8701 18.4993 17.3051 18.4993 17.7502C18.4993 18.3469 18.2622 18.9192 17.8403 19.3411C17.4183 19.7631 16.846 20.0002 16.2493 20.0002Z" fill="currentColor"></path></svg>
</button>
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
