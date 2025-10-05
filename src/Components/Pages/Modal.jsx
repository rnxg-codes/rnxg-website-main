import React from 'react'
import './modal.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Modal({show,setShow, project,key}) {
  const handlePassInfoShow = (data)=>{
    // console.log(data.id);
    document.querySelector('body').style.overflow="visible"

  }

  return (
    <>
    {show ? 


                 <div key={project.id} className="modal-container" onClick={()=>handlePassInfoShow(project)} show={show}>
        
        {/* <div className="left-button">
<button onClick={()=>project+1} ><svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 jgfuCe IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24"><path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path></svg></button>
        </div> */}
        <div className="main-container-modal" >

       
         <div className="modal-left">
                        {/* <img src={project.img} alt="" /> */}
                        <video  src={project.video} type="video/mp4"width="320" height="240" poster={project.img} controls={project.controls}>
 

 Your browser does not support the video tag.
     </video>

         </div>
         <div className="modal-right" >
           <div className="title-modal">
                         <h2>{project['Project-Name']}
  
             </h2> 
                                    <button onClick={()=> setShow(false)}>
             <img rel="preload" id='close' src="https://ik.imagekit.io/wqweoudym/multiply--v1_2N3i7GtSw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651320815185"/>
             </button> 
           </div>

             <hr />
                           <p><strong>{project.Team}</strong></p>

             <p >{project.Description}</p>
                         <a  href={project.Github} >
                         <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg>
                         </a>
            {/* <video  src={project.video} type="video/mp4"width="320" height="240" poster={project.img} controls>
 

  Your browser does not support the video tag.
      </video> */}
             <div className="pdff">
                           <embed src={project.Pdf+"/preview?usp=sharing"} frameborder="0" width="100%" height="2000px"/>

             </div>
         </div>
 
          </div>   
               {/* <div className="right-button">
<button onClick={()=>project.id+1}> <svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 jgfuCe IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24"><path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path></svg></button>
         </div> */}
   </div>  


 
     : null}


    </>
  )
}
