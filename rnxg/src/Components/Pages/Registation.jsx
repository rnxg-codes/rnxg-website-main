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

      <div className="register-now">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCMz9jvGuAFT7HufSX_OQrzsHzDpeKpgxM3cv5vMb9mZXOag/viewform"><button>Register Now</button></a>

<a href={require("../Pages/Event.pdf")} download="MoreInfo"><button>More-Info</button></a>


      </div>

  <div className="info-reg">
      <div className="intera">
<div className="info11">
<h2><center>WHAT IS RMAGEDDON ?</center></h2>
<p><center>Rmageddon is a intra college robotics event organised by RNXG. Here we organise workshops and conduct various compititions for college students.</center></p>
</div>
<div className="info22">
<h2><center>RMAGEDDON 2022</center></h2>
<p><center>Lets have a look on RMAGEDDON 2022. This year we are going to organise two events namely Sketch-Bot and ROB-O-RACE & conduct various technical workshops.</center></p>

</div></div>
      </div> 
      <div className="events-reg">
<div className="event11">
<h3>Double Pole Double Throw ( DPDT ) Bot</h3>
<p></p>
</div>
<div className="event22">
<h3>Sketch Bot</h3>
<p></p>
</div>

      </div>

         <Footer />

   </div>
   </>
  )
}
