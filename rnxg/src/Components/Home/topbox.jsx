import React from 'react';
import './topbox.css';
import Video from './dbr.mp4'
import Footer from './Footer';
import Mainbox from './Main-box';
export default function Topbox() {
  return <>
  <div className="topbox">
  <div className='Topbox-wrapper'>
<div className="topbox-content">
  <div className="t-left">
<div className="t-main-title">
<div class="box-main">
           
           <p class="text-big">
           Where the world builds&#160;
        <span class="text-change" data-wait="2500" data-words='["Software&#160;","Developer&#160;","Inovaters&#160;"]'> </span></p>

    
     
      
     </div>
</div>
<div className="t-low-title">
<h4>Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.</h4>
</div>
<div className="mainbutton">
  <button>Explore
  <svg xmlns="http://www.w3.org/2000/svg" class="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path class="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round"></path></svg>
  </button>
</div>
  </div>
  <div className="t-right">

  </div>
</div>

<div className="background-glow">
  <video id='video1' loop autoPlay muted >
  <source src={Video} type="video/mp4"/>
  </video>
    <img src="https://github.githubassets.com/images/modules/site/home/hero-glow.svg" alt="" />
</div>
  <div className="bottom-curve">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 1680 40" className="position-absolute width-full z-1" style={{bottom: "-4px",position:"relative"}}><path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path></svg>

</div>
  </div>

<div className="bottom">

</div>
</div>
  </>
}

const TypeWriter = function(txtElement, words, wait = 3000){
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait,10);
  this.type();
  this.isDeleting = false;
  }
  // Type Method
  TypeWriter.prototype.type = function(){
      // current index of word
      const current =this.wordIndex % this.words.length;
      // Get full text of current  word
      const fulltxt = this.words[current];
     // Check if deleting 
     if(this.isDeleting){
         //Remove a character
         this.txt = fulltxt.substring(0, this.txt.length - 1);
     }else{
         // Add a character
         this.txt = fulltxt.substring(0, this.txt.length + 1);
     }
  
     // Inset Txt into Element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
  // Type speed
  let typeSpeed = 50;
  
  if(this.isDeleting){
  typeSpeed =typeSpeed / 2;
  }
  // if word is complete 
  if(!this.isDeleting && this.txt === fulltxt)
  {
      // Make a pause at end
  typeSpeed = this.wait;
  // set delete is true
  this.isDeleting = true;
  }else if(this.isDeleting && this.txt ===''){
      this.isDeleting = false;
      //Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
  }
  
  
      setTimeout(() => this.type() , typeSpeed)
  }
  // Init on DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  
  // Init App
  function init() {
      const txtElement = document.querySelector('.text-change');
      const words =JSON.parse(txtElement.getAttribute('data-words'));
      const wait = txtElement.getAttribute('data-wait');
      // Init Typewriter
      new TypeWriter(txtElement, words, wait);
  }
  

  // video delay

//  var video = document.querySelector("#video1");
// video.addEventListener("canplay", function() {
  // setTimeout(function() {
  //   video.play();
  // }, 1000);
// });

// window.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');
//   var video = document.querySelector("#video1");
//   setTimeout(function() {
//     video.play();
//   }, 5000);
// });