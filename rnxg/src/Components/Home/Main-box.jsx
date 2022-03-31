import React from 'react';
import './mainbox.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import image from '../images/11.jpg'
import image1 from '../images/33.png'
import Profiles from './profiles';
export default function Mainbox() {

  return <>
      <div className="outer-main-box">
        <div className="main-box-nav sticky" data-aos="zoom-in">
          <ul className="nav-contentss">
            <li className="main-box-nav-ele" id="nav-ele-1"><a href="#body-ele-1">Element 1</a></li>
            <li className="main-box-nav-ele" id="nav-ele-2"><a href="#body-ele-2">Element 2</a></li>
            <li className="main-box-nav-ele" id="nav-ele-3"><a href="#body-ele-3">Element 3</a></li>
            <li className="main-box-nav-ele" id="nav-ele-4"><a href="#body-ele-4">Element 4</a></li>
            <li className="main-box-nav-ele" id="nav-ele-5"><a href="#body-ele-5">Element 5</a></li>
          </ul>
        </div>
        <div className="main-box-body">
          <div className="top-section-mainbox">
          <div className="main-image" data-aos="">
           <img   src={image} alt="" />
         </div> 
         <div className="main-text" data-aos="fade-up">
           <h3>Bring on the Rnxg</h3>
         </div>
          </div>
          <div className="middle-section-mainbox">
          <div className="main1-text" data-aos="fade-up">
           <h3>Its a drone</h3>
         </div>
          <div className="main1-image" data-aos="">
           <img width="75%"  src={image1} alt="" />
         </div>
        
          </div> <Profiles />
        </div>
        
      </div>
  </>;
}
  // <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    AOS.init({
      duration:1000,
    });
