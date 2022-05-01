import React from 'react'
import { User } from './data'
import Navbar from './Navbar'
import './profiles.css'
import Footer from './Footer';

export default function Profiles() {
  console.log(User)

    return (<>
 
    <div className="profiles-main">
       <Navbar/>  
      <div className="profile-top" id='top1'>
        <h1>Who are we?</h1>
        <p><center>We're a bunch of young people trying to solve as many  problems as possible for college students</center> <center> and giving them an optimum, all-in-one platform for their overall growth.</center></p>
        <img src="https://www.bluelearn.in/assets/bitmojies.png" alt="" />

      </div>
      <div className="profile-between">
        <div className="top-prof-bet">

        
        <img width={200} height={200} src="https://ik.imagekit.io/wqweoudym/target_Cj10lQURn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651259877569" alt="" />
        <div className="our-mission">
          
          <h1>Our Mission</h1>
          <p><center>To increase enthusiasm & knowledge towards robotics by providing hands-on & multidisciplinary collaborative experience in mechanics, electronics, designing & programming, with all departments working in symphony to create marvellous projects.</center></p>
        </div></div>
        <div className="bot-prof-bet">
                <div className="our-vision">
<h1>Our Vision</h1>
<p><center>We provide an open platform for students in the institute who wish to advance in the technological world. We integrate technology to tackle real-world challenges.</center></p>
        </div>
                  <img width={200} height={200} src="https://ik.imagekit.io/wqweoudym/shuttle_9IUnMb4Fx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651260169056" alt="" />

        </div>

      </div>
      <div className="profile-down">
      <div className="tiltee"><h1>The <span>team</span> that makes it all possible.</h1></div>  
        <div className="gallery-of-team">
        {User.map((User)=>{
      return <a href={User.LinkedIn}>
      <div className="profile-card" >
        <div className="linkdin">
        <div className="avatar">
          <img src={User.image} alt="" />
        </div>
<div className="personal-info">
  <h4>{User.Name}</h4>
  <p>{User.Position}</p>
</div></div>
      </div></a>

      
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

            