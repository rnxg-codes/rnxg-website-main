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
      <div className="profile-top">
        <h1>Who are we?</h1>
        <p><center>We're a bunch of young people trying to solve as many  problems as possible for college students</center> <center> and giving them an optimum, all-in-one platform for their overall growth.</center></p>
        <img src="https://www.bluelearn.in/assets/bitmojies.png" alt="" />

      </div>
      <div className="profile-between">
        
        <div className="our-mission">
          <h1>Our Mission</h1>
          <p>To empower every student to get access to great learning experiences, amazing friends and opportunities.</p>
        </div>
        <div className="our-vision">
<h1>Our Vision</h1>
<p>To build the world's most inclusive online university for learning real life skills and networking with the smartest people.</p>
        </div>
      </div>
      <div className="profile-down">
      <div className="tiltee"><h1>The <span>team</span> that makes it all possible.</h1></div>  
        <div className="gallery-of-team">
        {User.map((User)=>{
      return <div className="profile-card">
        <div className="linkdin">
<button><a href= {User.LinkedIn}><svg stroke="#fff" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></button>
        <div className="avatar">
          <img src={User.image} alt="" />
        </div>
<div className="personal-info">
  <h4>{User.Name}</h4>
</div></div>
      </div>

      
  })}
        </div>
      </div>
     <Footer/>     
    </div>


    </>
    
  )
}

            