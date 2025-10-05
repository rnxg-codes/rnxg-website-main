import React, { useEffect } from 'react'
import './celebration.css'
import Confetti from 'react-confetti' 


export default function Celebration () {
    const Cross=()=>{
        document.getElementById('navbar12').style.top='0px';
        document.getElementById('news').style.display='none';
        // document.getElementById('sprinkle').style.display='none';
        document.getElementById('confetti').style.display='none';
          }
  return (
    <> 
    <div className="news" id='news'>

  <div className="news-in">
  <h4>
  <center>RNXG shortlisted for DD Robocon 2023 Stage-03 </center>
   </h4>
   <div className="news-cancel">
            <a href={require("../Home/PDF/Result of DD-Robocon 2023 Stage-2 Final (1).pdf")} download="Result of Stage 02"><button id='Know'>Know More</button></a>
     <button id='close' onClick={Cross}>
     <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="#fff" d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z"></path></svg>
     </button>
   </div>
   </div>
</div>
<Confetti  id='confetti'
      height={1300}/>
</>
  )
}
