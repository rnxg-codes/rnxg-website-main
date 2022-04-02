import React from "react";
import "./mainbox.css";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../images/11.jpg";
import image1 from "../images/33.png";
import image2 from "../images/22.JPG";
import image3 from "../images/44.jpg";
import image5 from "../images/55.jpg";
import image6 from "../images/66.jpg";
import image7 from "../images/77.jpg";
import image8 from "../images/88.JPG";
import image9 from "../images/99.JPG";
import image10 from "../images/10.jpg";
import Profiles from "./profiles";
import "./main2.css";
import Slider from "./slider";
import Cards from "./cards";
export default function Mainbox() {
  return (
 <>
 <div className="bg">
   <div className="rgmd">
<h1>Why RNXG?!</h1>
<p>Join niche clubs, interact with experts, explore, network with high-profile and ambitious individuals, get internships, and join India’s largest community all for free! What are you waiting for?</p>
<span>The results? Safer, more efficient and more predictable operations.</span>
   </div>
   <div className="lfmd">
     <div className="video">
       <video  loop autoPlay muted id='video1' >
<source src="https://cdn.dribbble.com/users/32512/screenshots/15330154/media/87c27dd3eb379beba1a61975fb9f6b43.mp4" type="video/mp4"/>
</video>
     </div>

   </div>
 </div>
 <div className="fg">
 <h1>MEET OUR CUSTOMERS</h1>
 <div className="pro">
   <img id="lol1" src="https://miro.medium.com/max/1400/0*r5nr0xUKZkMFEV0a.png" alt="" />
   <img  id="lol2" src="https://newsonair.com/robocon2022/wp-content/uploads/sites/24/2021/10/robocon-logo-v2-72-ppi-01.png" alt="" />
   <img  id="lol3"src="https://yt3.ggpht.com/ytc/AKedOLSkaYvbtH1v3mhrrJShlHbcZpBo6efV_QPwqvPX=s900-c-k-c0x00ffffff-no-rj" alt="" />
   <img  id="lol4"src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png" alt="" />
 </div>
 </div>
 <div className="sliderq" id="down2">
   <h1>Our Team</h1>
 <Slider/>
 </div>
 <div className="about">
   <div className="em1">
        <h1>Why our members love us</h1>
   <p>See more on our Wall of love </p>
   </div>

    <div className="art">
   <Cards/>
   <span>
      <Cards/>
   <Cards/>  
   </span>


 </div>
 </div>

 </>

  );
}
// <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>;
AOS.init({
  duration: 1000,
});
