import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import "./banner.css";




function Banner(){
  
  const images = [
    { url: pic1 },
    { url: pic2 },
    
  ];
  

   return(
    <div className="banner">
      <div className="slider">
      <SimpleImageSlider
        width={"100%"}
        height={"70vh"}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      </div>
        
        </div>
   ); 
}

export default Banner;


