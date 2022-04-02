import React from 'react'
import { User } from './data'
import './profiles.css'
export default function Profiles() {
  console.log(User)
    return (<>
    <div className="list">
        {User.map((User)=>{
            return <div className="containerr">

    {/* <div className="main-card"> */}
      <div className="cards">

        <div className="card">
         <div className="content">
           <div className="img">
            <img src={User.image} alt=""/>
           </div>
           <div className="details">
             <div className="name">{User.Name}</div>
  
           </div>

         </div>
        </div>

      </div>

  </div>

            
        })}
    </div>
    
    
    
    </>
    
  )
}

            