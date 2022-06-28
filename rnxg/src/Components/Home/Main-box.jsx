import React from "react";
import "./mainbox.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import video from './rnxglogo.mp4'

// import image from "../images/11.jpg";
// import image1 from "../images/33.png";
// import image2 from "../images/22.JPG";
// import image3 from "../images/44.jpg";
// import image5 from "../images/55.jpg";
// import image6 from "../images/66.jpg";
// import image7 from "../images/77.jpg";
// import image8 from "../images/88.JPG";
// import image9 from "../images/99.JPG";
// import image10 from "../images/10.jpg";
// import Profiles from "./profiles";
import "./main2.css";
import Slider from "./slider";
import Cards from "./cards";
export default function Mainbox() {
  return (
 <>
 <div className="bg">
   <div className="rgmd">
     <h2>Why RNXG?!</h2>
<center><p>Members of the RNXG, regardless of their fields, collaborate as a team to generate multidisciplinary technical expertise. Robotics for Next Generation, or RNXG, is the greatest platform for working on various issue statements and developing the best solutions for them. Artificial Intelligence, Machine Learning, Deep Learning, Embedded Systems, IoT, VLSI, Robotics, and other emerging technologies are explored in RNXG.</p>
</center>
<center><span>The results? Safer, more efficient and more predictable operations.</span>
</center>
   </div>
   <div className="lfmd">
     <div className="video">
       <video  loop autoPlay muted id='video1' >
<source src="https://ik.imagekit.io/wqweoudym/rnxglogo.803a96aede27aa31bf12_Ebn6ZrEkY.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1651307175453" type="video/mp4"/>
</video>
     </div>

   </div>

 </div>  
 <div className="svg">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 340">
  <path fill="#040d21" fill-opacity="1" d="M0,128L40,154.7C80,181,160,235,240,218.7C320,203,400,117,480,101.3C560,85,640,139,720,144C800,149,880,107,960,96C1040,85,1120,107,1200,133.3C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
</svg>
</div>
<div className="alignment">

 <div className="fg">
 <h2> Our Participation</h2>
 <div className="pro">
   <img id="lol1" src="https://ik.imagekit.io/wqweoudym/0_r5nr0xUKZkMFEV0a_nVDqA3KG1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651307021694" alt="" />
   <img  id="lol2" src="https://ik.imagekit.io/wqweoudym/robocon-logo-v2-72-ppi-01_JpRlY64de.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651307038574" alt="" />
   <img  id="lol3"src="https://ik.imagekit.io/wqweoudym/SIH_2018_logo_L2YaKxpBy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651482769977" alt="" />
   {/* <img  id="lol4"src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png" alt="" /> */}
 </div>
 </div>
 {/* <div className="sliderq" id="down2">
   <h1>Our Team</h1>
 <Slider/>
 </div> */}
 <div className="about" >
   <div className="em1"id="about-card">
        <h2 >Why our members love us</h2>
   <p>See more on our Wall of love </p>
   </div>

    <div className="art">
   <Cards/>

</div>


 </div>
 
 
 </div>

 </>

  );
}
// <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
{/* <script src="https://unpkg.com/aos@next/dist/aos.js"></script>;
AOS.init({
  duration: 1000,
}); */}
