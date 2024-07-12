import React from 'react'
import bg from './assets/bg.jpg';
import bg3 from './assets/bg3.jpg';
import bg4 from './assets/bg4.jpg';
import bg5 from './assets/img4.jpg';
import bg6 from './assets/img6.jpg';
import bg7 from './assets/headerImg.jpg';


function ImageSlider() {
  return (
    <>
    <div class="Image-container">
        
    <div class="slide-container">
        <div class="brands">
            <div className="logos">
                <img src={bg} alt="" />
                <img src={bg3} alt="" />
                <img src={bg4} alt="" />
                <img src={bg5} alt="" />
                <img src={bg6} alt="" />
                <img src={bg7} alt="" />
            </div>
            <div class="logos">
                <img src={bg} alt="" />
                <img src={bg3} alt="" />
                <img src={bg4} alt="" />
                <img src={bg5} alt="" />
                <img src={bg6} alt="" /> 
                <img src={bg7} alt="" />   
            </div>
        </div>
    </div>
    </div>

    </>
  )
}

export default ImageSlider
