import React from 'react'
import "./feature.css"
import img1 from "./image/gallery-img1.jpg"
import img2 from "./image/gallery-img2.jpg"
import img3 from "./image/gallery-img3.jpg"


function Feature() {
  return (
    <div><>
    <h1 className='featuretitle'>Featured Image's</h1>
    <div className="card__container">
      <div className="img__card">
        <img src={img1} alt="" />
        <p>
        starry nights in background , cafe on terrace , sunflower vase on table , conceptual art , digital art , oil painting  - aditya
        </p>
      </div>
      <div className="img__card">
        <img src={img2} alt="" />
        <p>
        Centered portrait of an ultra detailed Mechanical <br />
          Cyberpunk Female Android, looking into the camera...
        </p>
      </div>
      <div className="img__card">
        <img src={img3} alt="" />
        <p>
         a photograph of an astronaut riding a horse , realistic, conceptual art - aditya        </p>
      </div>
    </div>
  </>
  </div>
  )
}

export default Feature

