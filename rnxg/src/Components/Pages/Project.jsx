import React,{useState} from 'react'
import Footer from '../Home/Footer'
import Navbar from '../Home/Navbar'
import './Project.css'
import { Link, animateScroll as scroll } from "react-scroll";


import { project } from '../Home/info (1)'
import Modal from './Modal'
export default function Project(){
// const [showModal,setShowModal] = useState(false)
const [show, setShow] = React.useState(false);
const [proj, setProject] = React.useState();

// {show && ( <ModalPassInfo
//   modelClose={() => handlePassInfoClose()}
//   modelShow={showPaaInfo}
//   //id={item.id}
//   setshowPaaInfo={setshowPaaInfo}
// />
// )}

const openModal = ()=>{
  

}
  const body = document.querySelector(".Projects");
//  if(setShow(true)){
//     body.style.overflow = "hidden";
//  }
//  else if(setShow(false)){
//   body.style.overflow = "auto";

//  }c
// {setShow(true)? document.getElementsByClassName('Projects').style = {overflow:"hidden"}: document.getElementsByClassName('Projects').style={overflow:"auto"}}
const handlePassInfoShow = (data)=>{
  // setShow(true);
  setProject(data)
  console.log(data);
  setShow(true)

 

}
  return (
   <>
 <div className="Projects" id='top1'>
     <Navbar/>
     <div className="Project-top">
         <div className="project-top-left">
         <h2>RNXG <span>PROJECTS</span></h2>
<h1>The projects that actually help you grow !</h1>
<p>We seek to keep up with current innovations at all times. At RNXG, we combine scientific and technological ideas to provide technical solutions to real-world challenges.</p>
<Link
    activeClass="active"
    to="random2"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>
<button>Explore <span><svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg></span></button>
      </Link>  
         </div>
         <div className="project-top-right"></div>

     </div>
     <div className="Project-between" id='random2'>
<div className="pro-bet-top">
<h2>Some intresting projects of RNXG</h2>
</div>
<div className="pro-bet-down">
            <div className="project-card">
            {project.map((project,key)=>{
      return <div className="projectss" key={project.id}   onClick={()=>handlePassInfoShow(project)} >
<div className="project-img">
<img src={project.img} alt="" />
</div>
<div className="project-title">
<h4><center>{project['Project-Name']}</center></h4>
</div>
<div  className="description">
<p><center>{project.Description}</center> </p>
</div>
<div className="team">
<span><center>{project.Team}</center></span>
</div>



      </div>

      
  })}
        </div>
</div>
     </div>
     <div className="Project-bottom">
    
     <Modal key={project.id} project={proj} show={show} setShow={setShow} 

/>


     </div>
     <div className="E4">
       <Footer/>
     </div>
     
 </div>
   </>
  )
}
