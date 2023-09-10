import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage2 from "../Assets/about-background-image2.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";
const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img id="homepage-image" src={AboutBackgroundImage2} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Food is an important part of a balanced diet</h1>
        <p className="primary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p className="primary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare suspendisse sed nisi lacus sed viverra tellus in. </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button"> <BsFillPlayCircleFill/> Watch Video </button>
        </div>
      </div>
    </div>
  );
}

export default About