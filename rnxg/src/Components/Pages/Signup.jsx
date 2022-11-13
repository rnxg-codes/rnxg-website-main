import React, { useState } from "react";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
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
      <Navbar/>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h3>Register Your Account</h3>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          name="first_name"
          onChange={onchange}
          placeholder="Enter Your First Name"
          maxLength={50}
          value={credentials.first_name}
          required
        />

        <label htmlFor="name">Last Name</label>
        <input
          type="text"
          name="last_name"
          onChange={onchange}
          placeholder="Enter Your Last Name"
          value={credentials.last_name}
          maxLength={50}
          required
        />

        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your valid Email"
          onChange={onchange}
          maxLength={254}
          value={credentials.email}
          required
        />

        <label htmlFor="name">Phone No.</label>
        <input
          type="text"
          name="phone"
          onChange={onchange}
          placeholder="Enter Your Phone No."
          minLength={10}
          maxLength={10}
          value={credentials.phone}
          required
        />

        <label htmlFor="name">Organisation Name</label>
        <input
          type="text"
          name="org_name"
          id="name"
          onChange={onchange}
          placeholder="Enter Organisation Name"
          value={credentials.org_name}
          minlength="10"
          maxlength='50'
          required
        />

        <label htmlFor="email">Organisation address</label>
        <input
          type="text"
          name="org_address"
          placeholder="Enter Organisation Address"
          onChange={onchange}
          id="email"
          minLength={4}
          maxLength={1000}
          value={credentials.org_address}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter valid Password"
          onChange={onchange}
          minLength={16}
          id="password"
          value={credentials.password}
          required
        />

        <button className="login-button">Register Account</button>
    
      </form>
      <Footer/>
    </>
  );
};

export default Signup;
