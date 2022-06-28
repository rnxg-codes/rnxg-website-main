import React from 'react'
import  './cards.css'

import{ alum }from './alum'
export default function Cards() {
  return ( <>
  {alum.map((alum)=>{
      return  <div className="cardss"> 
      <div className="prof-img">
            <img rel="preload" src={alum.image} alt="" />
            </div>                
            <div className="quote">
                 <p> <span>&#10077;</span> {alum.Review}</p>   
             </div>
             <div className="username">
            <h3>{alum.Name}</h3> 
             </div>
        

       </div>


      

      
  })}
          
 
  
 </> )
}
