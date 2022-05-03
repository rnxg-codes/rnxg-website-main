import React from 'react'
import Footer from '../Home/Footer'
import Navbar from '../Home/Navbar'
import './registation.css'
export default function Registation() {
  return (
   <>
   <div className="registations">
          <Navbar/>

       <img src="https://ik.imagekit.io/wqweoudym/aj_NtiObHGbwq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651591696322" alt="" />
   <div className="regtop">
<h2>RMAGEDDON <span>2022</span> </h2>
   </div>
  <div className="info-reg">
      <div className="intera">
<div className="info11">
<h2>WHAT IS RMAGEDDON ?</h2>
<p>Rmageddon is a intra college robotics event organised by first year team. Here   we organise workshops and conduct various compititions.</p>
</div>
<div className="info22">
<h2>RMAGEDDON 2022</h2>
<p>Lets have a look on RMAGEDDON 2020. Here we organised three events namely Sketch-Bot, Rob N Rob, Fast N Follower & conducted various technical workshops. More than 275 participants participated in the events and 400+ students attended</p>

</div></div>
      </div> 
      <div className="events-reg">

      </div>
      <div className="register-now">
<button>Register Now</button>
      </div>
         <Footer />

   </div>
   </>
  )
}
