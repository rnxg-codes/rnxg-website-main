import React from 'react'
import Footer from '../Home/Footer'
import Navbar from '../Home/Navbar'
import './Project.css'
import { project } from '../Home/info (1)'
export default function Project()

{
  console.log(project)
  return (
   <>
 <div className="Projects">
     <Navbar/>
     <div className="Project-top">
         <div className="project-top-left">
         <h2>RNXG <span>PROJECTS</span></h2>
<h1>The projects that actually help you grow !</h1>
<p>Get access to free LIVE events that help you explore your favorite fields and grow to the next level. They’re taken by industry experts having vast knowledge about their subject.</p>
<button>Explore <span><svg xmlns="http://www.w3.org/2000/svg" class="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path class="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round"></path></svg></span></button>
         </div>
         <div className="project-top-right"></div>

     </div>
     <div className="Project-between">
<div className="pro-bet-top">
<h2>Some intresting projects of RNXG</h2>
</div>
<div className="pro-bet-down">
            <div className="project-card">
            {project.map((project)=>{
      return <div className="projectss">
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

     </div>
     <Footer/>
 </div>
   </>
  )
}
