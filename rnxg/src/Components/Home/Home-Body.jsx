import React from 'react';
import Footer from './Footer';
import './Homebody.css';
import Mainbox from './Main-box';
import Navbar from './Navbar';
import Topbox from './topbox';
import Events  from './Events';
//import { Link, animateScroll as scroll, Events } from "react-scroll";
export default function HomeBody() {
  return <>
    

   <div className="home-box">
   <div className='E1'>
<Navbar/>
</div>
<div className="E2">
  <Topbox/>
</div>
<div className="E3"id='down'>
  <Mainbox/>
</div>

<div className="E4">
  <Footer/>
</div>

<div className="E5">
<div className="container3">
  <a href="https://www.sggs.ac.in/">
  <img width={320} height={60} src="https://www.sggs.ac.in/uploads/logos/sggs2.png" alt="" />
</a>
 <span>© 2022, Rnxg Pvt. Ltd. All Rights Reserved.</span>
</div>
</div>


      
  </div>  </>
}
