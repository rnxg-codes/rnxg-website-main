import React from "react";
import "./anime.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Anime() {
  return (
    <>
      <div>
        <div className="container" data-aos="zoom-in">
          <div
            className="card"
            data-tilt
            data-tilt-max={50}
            data-tilt-speed={200}
            data-tilt-perspective={700}
            data-tilt-glare="true"
            data-tilt-max-glare="0.8"
          >
            <div className="content">
              <h2>01</h2>
              <h3>Card One</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur amet exercitationem molestias quae illum atque
                consequuntur omnis eligendi mollitia asperiores consequatur
                culpa beatae dolorum veritatis qui saepe, sint voluptas commodi?
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div
            className="card"
            data-tilt
            data-tilt-max={50}
            data-tilt-speed={200}
            data-tilt-perspective={700}
            data-tilt-glare="true"
            data-tilt-max-glare="0.8"
          >
            <div className="content">
              <h2>02</h2>
              <h3>Card Two</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur amet exercitationem molestias quae illum atque
                consequuntur omnis eligendi mollitia asperiores consequatur
                culpa beatae dolorum veritatis qui saepe, sint voluptas commodi?
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div
            className="card"
            data-tilt
            data-tilt-max={50}
            data-tilt-speed={200}
            data-tilt-perspective={700}
            data-tilt-glare="true"
            data-tilt-max-glare="0.8"
          >
            <div className="content">
              <h2>03</h2>
              <h3>Card Three</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur amet exercitationem molestias quae illum atque
                consequuntur omnis eligendi mollitia asperiores consequatur
                culpa beatae dolorum veritatis qui saepe, sint voluptas commodi?
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>;
AOS.init({
  duration: 1000,
});
