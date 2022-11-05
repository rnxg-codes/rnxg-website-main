import React from "react";
import "./topbox.css";

import Video from "./liq.mp4";
import Footer from "./Footer";
import Mainbox from "./Main-box";
import { Link, animateScroll as scroll } from "react-scroll";
import Popup from "../Pages/Popup";
import Celebration from "./celebration";
import { Parallax, ParallaxLayer } from "react-parallax";

export default function Topbox() {
  return (
    <>
     <Parallax strength={800}>
      <div className="topbox" id="top1">
        <div className="Topbox-wrapper">
          <div className="topbox-content">
            <div className="t-left">
              <div className="t-main-title">
                <div className="box-main">
                  <h1 className="text-big">
                    Where we build&#160;
                    <div className="mask">
                      <span data-show>Developers</span>
                      <span>Innovators</span>
                      <span>Creators</span>
                      <span>RNXGians</span>
                    </div>
                  </h1>
                </div>
              </div>
              <div className="t-low-title">
                <h4>
                  RNXG’s mission is to increase enthusiasm and knowledge towards
                  robotics by providing a hands on and multidisciplinary
                  collaboration experience in designing, programming. We always
                  try to familiarize with new technology.
                </h4>
              </div>
              <div className="mainbutton">
                <Link
                  activeclassName="active"
                  to="down"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {" "}
                  <button>
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="octicon arrow-symbol-mktg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                      ></path>
                      <path
                        className="octicon-chevrow-stem"
                        stroke="currentColor"
                        d="M1.75 8H11"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
            <div className="t-right">
              {/* <Popup/> */}
              {/* <img src="	https://ik.imagekit.io/wqweoudym/293970412_167923789061300_7458622333974671045_n_-UpjRRU0-.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1658041514300" alt="" /> */}
            </div>
          </div>

          <div className="background-glow">
            <video id="video1" loop autoPlay muted>
              {/* <source src={Video} type="video/mp4"/> */}
            </video>
            <img
              rel="preload"
              src="https://github.githubassets.com/images/modules/site/home/hero-glow.svg"
              alt=""
            />
          </div>
        </div>

        <div className="bottom-curve">
          <svg
            style={{ transform: "rotate(180deg)" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#040D21"
              fillOpacity="1"
              d="M0,96L80,122.7C160,149,320,203,480,186.7C640,171,800,85,960,69.3C1120,53,1280,107,1360,133.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      </Parallax>
    </>
  );
}
window.addEventListener("DOMContentLoaded", (event) => {
  setInterval(function () {
    const show = document.querySelector("span[data-show]");
    const next =
      show.nextElementSibling || document.querySelector("span:first-child");
    const up = document.querySelector("span[data-up]");

    if (up) {
      up.removeAttribute("data-up");
    }

    show.removeAttribute("data-show");
    show.setAttribute("data-up", "");

    next.setAttribute("data-show", "");
  }, 2500);
});

// video delay

//  var video = document.querySelector("#video1");
// video.addEventListener("canplay", function() {
// setTimeout(function() {
//   video.play();
// }, 1000);
// });

// window.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');
//   var video = document.querySelector("#video1");
//   setTimeout(function() {
//     video.play();
//   }, 5000);
// });
