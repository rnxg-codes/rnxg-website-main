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
<Events/>
</div>


      
  </div>  </>
}
