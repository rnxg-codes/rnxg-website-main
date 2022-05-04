import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import lo from './111.png'
import {  animateScroll as scroll } from "react-scroll";
// import { Routes, Route, Link } from "react-router-dom";
export default function Navbar() {

  let togglestatus = true;
  const clicked = ()=>{
    if (togglestatus === false) {

      document.querySelector(".aside").style.left = "-300px";
      document.querySelector("body").style.background = "#efefef";
       document.querySelector(".aside").style.boxShadow = "none";
  
       document.querySelector(".bar1").style.transform = "none";
       document.querySelector(".bar1").style.top = "0";
        document.querySelector(".bar2").style.visibility= "visible";
        document.querySelector(".bar3").style.transform = "none";
        document.querySelector(".bar3").style.top = "0";
  
  
          
  
      togglestatus = true;
    } else if (togglestatus === true) {
      document.querySelector(".aside").style.left = "0px";
    document.querySelector("body").style.background = "#8c8c8c";
      togglestatus = false;
  
        // document.querySelector(".aside").style.boxShadow = "0 4px 8px rgb(0 0 0 / 24%)";
    
     document.querySelector(".bar1").style.transform = "rotate(45deg)";
     document.querySelector(".bar1").style.top = "8.575px";
      document.querySelector(".bar2").style.visibility= "hidden";
      document.querySelector(".bar3").style.transform = "rotate(-45deg)";
      document.querySelector(".bar3").style.top = "-8.575px";
  
  
    }
  }
  return      <>
  <div className="navbar_11">

  <div className="nav-main">
        <div className="log">
        <Link
    activeClass="active"
    to={{pathname:"/"}}
   
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>           <h5>RNXG</h5></Link>
 
          </div>
        <ul>
           {/* <li> <a href="/">Home</a></li> */}
 <li> 
 <Link
    activeClass="active"
    to={{pathname:"/projects"}}
   
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>
  Projects</Link></li>
  <li>  <Link
    activeClass="active"
    to={{pathname:"/events"}}
   
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>   Events</Link></li>

  <li> 
  <Link
    activeClass="active"
    to={{pathname:"/profiles"}}
   
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>   About</Link>
    </li>
           
          
          
        
        </ul>
    </div>

    <div className="toggle" onClick={clicked}>
   <div className="bar1"></div>
   <div className="bar2"></div>
   <div className="bar3"></div>

      </div>
  </div>
  
  <aside className="aside" id="slide">
<div className="wrapper">
  <ul>
    <li className="item">
    <Link
    activeClass="active"
    to={{pathname:"/"}}
   
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>  <a href="">     Home</a> </Link>
      </li>
    <li className="item">
    <Link
    activeClass="active"
    to={{pathname:"/projects"}}
   
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>  <a href="/projects">Projects</a>  </Link>
     </li>

    <li className="item">
    <Link
    activeClass="active"
    to={{pathname:"/events"}}
   
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
> <a href="">Events</a> </Link>
    </li>
       <li className="item">
    <Link
    activeClass="active"
    to={{pathname:"/profiles"}}
   
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
> <a href="">About</a> </Link>
    </li>   
     <li className="item">
    <Link
    activeClass="active"
    to={{pathname:"/registations"}}
   
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
> <a href="">Register</a> </Link>
    </li>

  
  </ul>

</div>

    </aside>
  
  </>;
}


// function myFunction(){
//   var x= document.getElementById("menu");
//   if(x.style.display == "block")
//   {
//       x.style.display = "none";
//   }
//   else{
//       x.style.display = "block";
//   }}


//toggle
// window.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');

// console.log("hi there");
// let togglestatus = false;
// let toggle = document.getElementById('hit');
// let element =  document.querySelector('.nav-main ul')
// toggle.addEventListener('click',()=>{
   
//  if(togglestatus === false) { document.getElementById('change').setAttribute('transform','rotate(45),translate(0)')
//    document.getElementById('change').setAttribute('y','0')
//     document.getElementById('change1').setAttribute('transform','rotate(-45),translate(-45)')
//    document.getElementById('change1').setAttribute('y','30')
//      document.getElementById('change0').setAttribute('transform','rotate(-45),translate(-40)')
//    document.getElementById('change0').setAttribute('y','30')
//     }
//     else if (togglestatus === true){
//         document.getElementById('change').setAttribute('transform','rotate(0),translate(0)')
//    document.getElementById('change').setAttribute('y','30')
//     document.getElementById('change1').setAttribute('transform','rotate(0),translate(0)')
//    document.getElementById('change1').setAttribute('y','60')
//      document.getElementById('change0').setAttribute('transform','rotate(0),translate(0)')
//    document.getElementById('change0').setAttribute('y','0')
//     }
//    if(togglestatus === false)
// { 
//     element.style.visibility="visible";
//     element.style.boxShadow= "0 10px 25px rgba(92, 99, 105, .2)";
//     togglestatus = true;
//     }
//   else if(togglestatus === true){
      
//     element.style.visibility="hidden";
//     togglestatus = false;
//   }
// });

// });
