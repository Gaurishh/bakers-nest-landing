import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage2 from "../Assets/about-background-image2.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useRef } from "react";
 
const About = React.forwardRef((props, ref) => {
  return (
    <div className="about-section-container" ref={ref}>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img id="homepage-image" src={AboutBackgroundImage2} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Our Promise</h1>
        <p className="primary-text">We believe that the true magic of baking lies in the love and passion that goes into every bite. Our promise to you is to consistently deliver the finest baked goods, handcrafted with the utmost care and attention to detail. Whether you order daily or just on special occasions, you can always expect a delightful experience. </p>
        {/* <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button"> <BsFillPlayCircleFill/> Watch Video </button>
        </div> */}
      </div>
    </div>
  );
})

export default About