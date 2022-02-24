import React from 'react';
import './navbar.css';
import logos from './111.png'
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
  <nav className="nav-main">
        <div className="logo">
          <img  src={logos} alt="" />
          </div>
        <ul>
           <li> <a href="#">Home</a></li>
           <li> <a href="#">Projects</a></li>
           <li> <a href="#">Our Team</a></li>
           <li> <a href="#">Rmageddon</a></li>
           <li> <a href="#">Techanovation</a></li>
        </ul>
    </nav>

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
      <a href="/home"><svg viewBox="64 64 896 896" focusable="false" data-icon="home" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg>      &#160;&#160;&#160;&#160;&#160;Home</a></li>
    <li className="item">
      <a href="#"><svg viewBox="64 64 896 896" focusable="false" data-icon="play-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg>      &#160;&#160;&#160;&#160;&#160;Projects</a></li>
    <li className="item">
    <a href="#"><svg width="20" height="16" viewBox="0 0 20 16" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ><path d="M7.27266 1.77774C6.30824 1.77774 5.38331 2.15234 4.70136 2.81912C4.01941 3.4859 3.6363 4.39025 3.6363 5.33322C3.6363 6.2762 4.01941 7.18055 4.70136 7.84733C5.38331 8.51411 6.30824 8.88871 7.27266 8.88871C8.23708 8.88871 9.16201 8.51411 9.84396 7.84733C10.5259 7.18055 10.909 6.2762 10.909 5.33322C10.909 4.39025 10.5259 3.4859 9.84396 2.81912C9.16201 2.15234 8.23708 1.77774 7.27266 1.77774ZM1.81812 5.33322C1.81812 3.91877 2.39279 2.56224 3.41571 1.56207C4.43864 0.561892 5.82603 0 7.27266 0C8.7193 0 10.1067 0.561892 11.1296 1.56207C12.1525 2.56224 12.7272 3.91877 12.7272 5.33322C12.7272 6.74768 12.1525 8.10421 11.1296 9.10438C10.1067 10.1046 8.7193 10.6664 7.27266 10.6664C5.82603 10.6664 4.43864 10.1046 3.41571 9.10438C2.39279 8.10421 1.81812 6.74768 1.81812 5.33322Z"></path><path d="M1.93091 14.2223H12.6145C12.1173 12.2694 10.0145 10.6668 7.27273 10.6668C4.53091 10.6668 2.42818 12.2694 1.93091 14.2223ZM0 15.1111C0 11.5512 3.39273 8.88903 7.27273 8.88903C11.1527 8.88903 14.5455 11.5512 14.5455 15.1111C14.5455 15.3469 14.4497 15.573 14.2792 15.7397C14.1087 15.9064 13.8775 16 13.6364 16H0.909091C0.667985 16 0.436754 15.9064 0.266267 15.7397C0.0957789 15.573 0 15.3469 0 15.1111ZM13.6373 8.77703C13.5293 8.96777 13.4122 9.15346 13.2864 9.33347C13.8527 9.82235 14.3564 10.3788 14.7836 10.9903C16.4845 11.5548 17.7055 12.7947 18.0691 14.2223H16.1818C16.3009 14.7965 16.3636 15.3911 16.3636 16H19.0909C19.332 16 19.5632 15.9064 19.7337 15.7397C19.9042 15.573 20 15.3469 20 15.1111C20 12.6294 18.3509 10.5841 16.0382 9.57257C16.9864 8.86486 17.6712 7.87272 17.9877 6.74812C18.3042 5.62352 18.2349 4.42849 17.7904 3.34608C17.3459 2.26368 16.5508 1.35359 15.5268 0.755236C14.5028 0.156882 13.3064 -0.0967432 12.1209 0.0332128C12.7286 0.565359 13.2409 1.1933 13.6364 1.89095C14.4162 2.08897 15.1067 2.53449 15.5996 3.15762C16.0926 3.78074 16.36 4.54623 16.36 5.33399C16.36 6.12176 16.0926 6.88725 15.5996 7.51037C15.1067 8.1335 14.4162 8.57901 13.6364 8.77703H13.6373Z"></path></svg>      &#160;&#160;&#160;&#160;&#160;Our Team</a></li>
    <li className="item">
     <a href="/chat"> <svg xmlns="http://www.w3.org/2000/svg"width="24" height="20" viewBox="0 0 24 24" fill="currentColor" ><path d="M13,11H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm4-4H7A1,1,0,0,0,7,9H17a1,1,0,0,0,0-2Zm2-5H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"/></svg>     &#160;&#160;&#160;&#160;&#160;Rmageddon</a></li>
    <li className="item">
      <a href="/profile"><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.3723 13.0573C14.9709 12.1591 14.3885 11.3433 13.6574 10.6553C12.9285 9.96524 12.0651 9.41508 11.1149 9.03518C11.1064 9.03116 11.0979 9.02915 11.0893 9.02513C12.4149 8.1206 13.2766 6.64724 13.2766 4.98492C13.2766 2.23116 10.9149 0 8 0C5.08513 0 2.72344 2.23116 2.72344 4.98492C2.72344 6.64724 3.58514 8.1206 4.91066 9.02713C4.90215 9.03116 4.89364 9.03316 4.88513 9.03719C3.93194 9.41708 3.07663 9.96181 2.34259 10.6573C1.61219 11.3459 1.02984 12.1615 0.627709 13.0593C0.232652 13.9382 0.0195891 14.8805 5.32039e-05 15.8352C-0.000514675 15.8566 0.00346833 15.878 0.0117677 15.8979C0.020067 15.9179 0.0325146 15.9361 0.0483771 15.9515C0.0642397 15.9669 0.0831961 15.9791 0.104129 15.9874C0.125063 15.9957 0.14755 16 0.170265 16H1.44685C1.54047 16 1.61494 15.9296 1.61706 15.8432C1.65962 14.2915 2.31919 12.8382 3.48514 11.7367C4.69151 10.597 6.29363 9.96985 8 9.96985C9.70637 9.96985 11.3085 10.597 12.5149 11.7367C13.6808 12.8382 14.3404 14.2915 14.3829 15.8432C14.3851 15.9317 14.4595 16 14.5531 16H15.8297C15.8524 16 15.8749 15.9957 15.8959 15.9874C15.9168 15.9791 15.9358 15.9669 15.9516 15.9515C15.9675 15.9361 15.9799 15.9179 15.9882 15.8979C15.9965 15.878 16.0005 15.8566 15.9999 15.8352C15.9787 14.8744 15.768 13.9397 15.3723 13.0573ZM8 8.44221C7.02341 8.44221 6.10427 8.08241 5.41278 7.42915C4.7213 6.77588 4.34045 5.90754 4.34045 4.98492C4.34045 4.06231 4.7213 3.19397 5.41278 2.5407C6.10427 1.88744 7.02341 1.52764 8 1.52764C8.97659 1.52764 9.89573 1.88744 10.5872 2.5407C11.2787 3.19397 11.6595 4.06231 11.6595 4.98492C11.6595 5.90754 11.2787 6.77588 10.5872 7.42915C9.89573 8.08241 8.97659 8.44221 8 8.44221Z"></path></svg>      &#160;&#160;&#160;&#160;&#160;Techanovation</a></li>
  <li >
    <a href="">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" ariaHidden="true" className="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" ><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg>
    &#160;&#160;&#160;&#160;  Logout</a>
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
