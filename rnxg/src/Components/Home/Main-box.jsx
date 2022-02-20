import React from 'react';
import './mainbox.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Mainbox() {

  return <>
      <div className="outer-main-box">
        <div className="main-box-nav sticky" data-aos="zoom-in">
          <ul className="nav-contents">
            <li className="main-box-nav-ele" id="nav-ele-1"><a href="#body-ele-1">Element 1</a></li>
            <li className="main-box-nav-ele" id="nav-ele-2"><a href="#body-ele-2">Element 2</a></li>
            <li className="main-box-nav-ele" id="nav-ele-3"><a href="#body-ele-3">Element 3</a></li>
            <li className="main-box-nav-ele" id="nav-ele-4"><a href="#body-ele-4">Element 4</a></li>
            <li className="main-box-nav-ele" id="nav-ele-5"><a href="#body-ele-5">Element 5</a></li>
          </ul>
        </div>
        <div className="main-box-body">
          <div className="main-box-body-ele" id="body-ele-1">
            <h3>Element 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea pariatur alias veritatis distinctio sequi porro eos corporis velit officiis. Corporis nesciunt harum similique itaque, atque possimus ex tempora labore, quasi doloremque minus obcaecati, ab delectus cum dolorem quod neque. Suscipit eveniet dolore quos dignissimos animi quam! Odit earum inventore eveniet pariatur aut assumenda, mollitia libero. Quisquam at reprehenderit harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corporis accusantium eaque enim ad tempora voluptas, provident eligendi quia corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum blanditiis maiores quae nostrum! Animi atque commodi illo tenetur? Maxime illo nihil optio cupiditate consectetur nam adipisci sequi repellat voluptas libero, qui aspernatur quam accusamus quibusdam. Quisquam, eum deserunt iusto porro quos deleniti, error ab non quod assumenda soluta, numquam ut!</p>
          </div>
          <hr />
          <div className="main-box-body-ele" id="body-ele-2">
            <h3>Element 2</h3>
            <img src="https://images.unsplash.com/photo-1641130382532-2514a6c93859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
          </div>
          <hr />
          <div className="main-box-body-ele" id="body-ele-3">
          <h3>Element 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea pariatur alias veritatis distinctio sequi porro eos corporis velit officiis. Corporis nesciunt harum similique itaque, atque possimus ex tempora labore, quasi doloremque minus obcaecati, ab delectus cum dolorem quod neque. Suscipit eveniet dolore quos dignissimos animi quam! Odit earum inventore eveniet pariatur aut assumenda, mollitia libero. Quisquam at reprehenderit harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in aut amet repellat quidem cumque magni quam, totam consequatur tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam ab quaerat necessitatibus autem officiis debitis nobis fuga labore excepturi eaque, laborum sapiente voluptas, sequi earum modi ratione provident sunt repellat itaque illum officia consequuntur dolorem. Unde earum dolore beatae sint similique cum. Similique totam praesentium quo ea. Rem, accusantium!</p>
          </div>
          <hr />
          <div className="main-box-body-ele" id="body-ele-4">
          <h3>Element 4</h3>
            <img src="https://images.unsplash.com/photo-1640289753542-b02666f4a664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
          </div>
          <hr />
          <div className="main-box-body-ele" id="body-ele-5">
          <h3>Element 5</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea pariatur alias veritatis distinctio sequi porro eos corporis velit officiis. Corporis nesciunt harum similique itaque, atque possimus ex tempora labore, quasi doloremque minus obcaecati, ab delectus cum dolorem quod neque. Suscipit eveniet dolore quos dignissimos animi quam! Odit earum inventore eveniet pariatur aut assumenda, mollitia libero. Quisquam at reprehenderit harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nisi ea corporis eaque maiores vero asperiores praesentium nobis amet pariatur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam corporis recusandae nisi maiores quod distinctio ipsa nihil, sed sunt eligendi velit officiis, suscipit ducimus sapiente, aut doloribus atque a illo vero iure assumenda! Sunt debitis est, laudantium velit accusantium accusamus impedit fugiat minima quo saepe voluptatem reprehenderit repudiandae architecto corporis?</p>
          </div>
          <hr />
        </div>
      </div>
  </>;
}
  // <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    AOS.init({
      duration:1000,
    });
