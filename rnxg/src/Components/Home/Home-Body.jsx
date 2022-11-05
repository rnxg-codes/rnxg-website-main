import React from "react";
import Footer from "./Footer";
import "./Homebody.css";
import Mainbox from "./Main-box";
import Navbar from "./Navbar";
import Topbox from "./topbox";

export default function HomeBody() {
  return (
    <>
     
      <div className="home-box">
        <div className="E1">
          <Navbar />
        </div>

          <div className="E2">
            <Topbox />
          </div>
      
          <div className="E3" id="down">
            <Mainbox />
          </div>
        <div className="E4">
          <Footer />
        </div>

        <div className="E5">
          <div className="container3">
            <a href="https://www.sggs.ac.in/">
              <img
                rel="preload"
                width={120}
                src="https://ik.imagekit.io/wqweoudym/sggsBlack_w3lWNe4AS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651499476996"
                alt=""
              />
            </a>
            <p>© 2022, Rnxg . All Rights Reserved.</p>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
