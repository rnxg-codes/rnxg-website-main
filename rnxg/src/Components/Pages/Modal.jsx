import React from 'react'
import './modal.css'

export default function Modal({show,setShow, project,key}) {
  const handlePassInfoShow = (data)=>{
    // console.log(data.id);

  }

  return (
    <>
    {show ? <div key={project.id} className="modal-container" onClick={()=>handlePassInfoShow(project)} show={show}>
        
        {/* <div className="left-button">
<button onClick={()=>project+1} ><svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 jgfuCe IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24"><path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path></svg></button>
        </div> */}
        <div className="main-container-modal">

       
         <div className="modal-left">
                        <img src={project.img} alt="" />

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
             <p >{project.Description}</p>
              <p><strong>{project.Team}</strong></p>
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
