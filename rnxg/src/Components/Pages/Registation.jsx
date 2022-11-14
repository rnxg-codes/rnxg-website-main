import React from 'react'
import Footer from '../Home/Footer'
import Navbar from '../Home/Navbar'
import Signup from "../Pages/Signup"
import './registation.css'
export default function Registation() {
  return (
    <>   <Navbar />
      <div className="registations">
     
        <div className="registation-left">
          <Signup />
        </div>
        <div className="registation-right"></div>
        

       

      </div> <Footer />
    </>
  )
}
