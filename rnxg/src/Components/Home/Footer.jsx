import React from "react";
import "./footer.css";


export default function Footer() {
  return (
    <>
    <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row cont">
                <div className="1div">
                
                <div className="col-6 col-lg-3 sect">
                  <h2>RNXG</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">History</a>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Contacts</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3 sect">
                     
                  <h2>Achievements</h2>
                  <ul>
                    <li>
                      <a href="#">Projects</a>
                    
                    </li>
                    <li>
                      <a href="#">Participations</a>
                    </li>
                    <li>
                      <a href="#">SIH</a>
                    </li>
                    <li>
                      <a href="#">Robotics Competitions </a>
                    </li>
                  </ul>
                </div>
</div>
                  <div className="2div">
                <div className="col-6 col-lg-3 sect">
                  <h2>Events</h2>
                  <ul>
                    <li>
                      <a href="#">Rmmegadon</a>
                    </li>
                    <li>
                      <a href="#">Technovation</a>
                    </li>
                    <li>
                      <a href="#">Line Follower Bot</a>
                    </li>
                    <li>
                      <a href="#">Robotics</a>
                    </li>
                  </ul>
                </div>

                <div id="new" style={{   
                  width: "155px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems:" center"                   
}} className="col-6 col-lg-3 sect">
                  <h2>Follow Us</h2>
                  <div className="row" style={{    


display: "flex",
justifyContent: "space-between",
width:" 140px"
                  }}>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/sggs_rnxg/">
                        <img src="https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg" width="18" height="18"></img>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                         <a href="https://www.facebook.com/rnxgsggs/">
                      <img src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg" width="18" height="18"></img>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                         <a href="https://youtube.com/channel/UC9fFrYx9UEpxDjS9YO6t2FA">
                      <img src="https://github.githubassets.com/images/modules/site/icons/footer/youtube.svg" width="18" height="18"></img>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                         <a href="https://in.linkedin.com/company/rnxg" width="18" height="18">
                              <img src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg" width="18" height="18"></img>
                         </a>
                         </div>

<div className="col-3 mx-auto">
<a href="https://www.instagram.com/sggs_rnxg/" >
     <img src="https://www.shareicon.net/data/256x256/2016/07/09/118293_instagram_512x512.png" width="18" height="18"></img>
</a>

</div>

                  </div></div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2022 RNXG
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
 );
};
    


