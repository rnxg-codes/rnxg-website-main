import React from "react";
import "./celebration.css";
import Confetti from "react-confetti";

export default function Celebration() {
  const Cross = () => {
    document.getElementById("navbar12").style.top = "0px";
    document.getElementById("news").style.display = "none";
    document.getElementById("sprinkle").style.display = "none";
  };
  return (
    <>
      <div className="news" id="news">
        <div className="news-in">
          <h4>
            <center>
              Congratulations Team RNXG for qualifying Stage-2 of Robocon
              <big>🎊</big>all the best for Stage-3
            </center>
          </h4>
          <div className="news-cancel">
            <a
              href={require("../Home/PDF/result-stage2.pdf")}
              download="stage-2 results"
            >
              <button id="Know">Know More</button>
            </a>

            <button id="close" onClick={Cross}>
              <svg viewBox="0 0 24 24" width="24" height="24" className="">
                <path
                  fill="#fff"
                  d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
