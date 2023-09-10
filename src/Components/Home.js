import React from 'react'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import BannerImage2 from "../Assets/home-banner-image2.jpg";
import Navbar from "./Navbar.js";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <>
    <div className='home-container'>

      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} alt="" />
        </div>
      </div>
      
      <Navbar/>

    </div>

    <div className='home-container2'>

      <div className='home-text-section'>
        <h1 className='primary-heading'>Your favorite food delivered hot & fresh.</h1>
        <p className='primary-text'>Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.</p>
        <button className='secondary-button'> Order now <FiArrowRight /> </button>
      </div>

      <div className='home-image-container'>
        <img id='homepage-image' src={BannerImage2} alt="" />
      </div>

    </div>
    </>
  )
}

export default Home