import React, { useState } from "react";
// import Footer from "../Home/Footer";
// import Navbar from "../Home/Navbar";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


import "./login.css";
const host = "https://registrationbackend.herokuapp.com";
const Signup = () => {
  

  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    org_name: "",
    org_address: "",
    password: "",
  });
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value }); //this is mainly use to reflect the change in words on frontend
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      phone,
      org_name,
      org_address,
      password,
    } = credentials;

    const response = await fetch(`${host}/registration`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.z
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //JSON. stringify() is used to convert Object to String
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        phone,
        org_name,
        org_address,
        password,
      }), // body data type must match "Content-Type" header 
      //JSON. parse() is used to convert String to Object
    });
    const json = await response.json();
    alert("Submitted")
    console.log(json);
  };

  return (
    <>
      {/* <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div> */}

      <form className="signup-form" autocomplete="off"  onSubmit={handleSubmit}>
        <h3>Register Member</h3>
        {/* <label htmlFor="name">First Name</label> */}
        <div className="Username" >
          <div className="Username-left">
          <input
          type="text"
          name="first_name"
          onChange={onchange}
          placeholder="First Name"
          maxLength={50}
          value={credentials.first_name}
          required
          autocomplete="off"
        />
          </div>


        {/* <label htmlFor="name">Last Name</label> */}
          <div className="Username-right">
           <input
          type="text"
          name="last_name"
          onChange={onchange}
          placeholder="Last Name"
          value={credentials.last_name}
          maxLength={50}
          required
              autocomplete="off"
        /> 
          </div>

        </div>


        {/* <label htmlFor="email">Email address</label> */}
        <div className="email">
         <input
            autocomplete="off"

          type="email"
          name="email"
          placeholder="Email"
          onChange={onchange}
          maxLength={254}
          value={credentials.email}
          required
        />
        </div>


        {/* <label htmlFor="name">Phone No.</label> */}
         <div className="phone">
         {/* <input
          type="phone"
          name="phone"
          onChange={onchange}
          placeholder="Phone No."
          minLength={10}
          maxLength={10}
          value={credentials.phone}
          required
        /> */}
          <PhoneInput
            country={"in"}
            value={credentials.email}
            autocomplete="off"
            // onChange={onchange}
          />
         </div>




        {/* <label htmlFor="password">Password</label> */}
        <div className="password">
          <input
          type="password"
          name="password"
          placeholder="Set Password"
          onChange={onchange}
          minLength={16}
          id="password"
          value={credentials.password}
          required
           autocomplete="off"
        />
        </div>
        

        <button className="login-button">Register</button>
    
      </form>
    </>
  );
};

export default Signup;
