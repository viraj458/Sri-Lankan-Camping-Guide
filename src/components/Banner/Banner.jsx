import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";




function Banner(){
  
  const images = [
     <img src={pic1} className="pic1" alt="pic2"  /> ,
     <img src={pic2} className="pic2" alt="pic2"  /> ,
    
  ];
  

   return(
    <div className="banner">
        <SimpleImageSlider
        width={1519}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
      />
        </div>
   ); 
}

export default Banner;


