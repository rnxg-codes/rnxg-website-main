import React from 'react';
import './navbar.css';
export default function Navbar() {
  return      <>
  <div className="navbar_11">
  <nav className="nav-main">
        <div className="logo">
          {/* <img src="./Bocadmium-logos_black2.png" alt="" /> */}
          </div>
        <ul>
           <li> <a href="#">Home</a></li>
           <li> <a href="#">Portfolio</a></li>
           <li> <a href="#">About Us</a></li>
           <li> <a href="#">Gallery</a></li>
           <li> <a href="#">Contact</a></li>
        </ul>
    </nav>

<div className="toggle">
    <button id="hit">
        <svg  viewBox="0 -2 100 80" width="40" height="30"
        style={{overflow:"visible"  }}> 
            <rect id="change0"width="75" height="10" fill="#fff"></rect>
            <rect id="change" y="30" width="75" height="10"fill="#fff"></rect>
            <rect id="change1" y="60" width="75" height="10"fill="#fff"></rect>
            {/* <!-- <rect transform="rotate(45),translate(0)" y="0" width="70" height="10"fill="#2666C1"></rect>
            <rect transform="rotate(-45),translate(-40)" y="30" width="70" height="10"fill="#2666C1"></rect> --> */}
          </svg>  
    </button>
</div>
  </div>
  
  
  
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
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

console.log("hi there");
let togglestatus = false;
let toggle = document.getElementById('hit');
let element =  document.querySelector('.nav-main ul')
toggle.addEventListener('click',()=>{
   
 if(togglestatus === false) { document.getElementById('change').setAttribute('transform','rotate(45),translate(0)')
   document.getElementById('change').setAttribute('y','0')
    document.getElementById('change1').setAttribute('transform','rotate(-45),translate(-45)')
   document.getElementById('change1').setAttribute('y','30')
     document.getElementById('change0').setAttribute('transform','rotate(-45),translate(-40)')
   document.getElementById('change0').setAttribute('y','30')
    }
    else if (togglestatus === true){
        document.getElementById('change').setAttribute('transform','rotate(0),translate(0)')
   document.getElementById('change').setAttribute('y','30')
    document.getElementById('change1').setAttribute('transform','rotate(0),translate(0)')
   document.getElementById('change1').setAttribute('y','60')
     document.getElementById('change0').setAttribute('transform','rotate(0),translate(0)')
   document.getElementById('change0').setAttribute('y','0')
    }
   if(togglestatus === false)
{ 
    element.style.visibility="visible";
    element.style.boxShadow= "0 10px 25px rgba(92, 99, 105, .2)";
    togglestatus = true;
    }
  else if(togglestatus === true){
      
    element.style.visibility="hidden";
    togglestatus = false;
  }
});

});
