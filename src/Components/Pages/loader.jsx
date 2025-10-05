import React from 'react'
import './loader.css'
import rnxg from './favicon.jpg'
export default function Loader() {
  return (
    <>
      <div class="center-loader">
        <div class="ring">

        </div>
         <img width={120} src={rnxg} alt="" />
      </div>
    </>
  )
}
