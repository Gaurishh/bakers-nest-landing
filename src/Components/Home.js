import { useRef } from 'react'
import React from 'react'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage2 from "../Assets/home-banner-image2.jpg";
import { WhatsApp } from '@mui/icons-material';
import Navbar from "./Navbar.js";
import { FiArrowRight } from "react-icons/fi";

const Home = React.forwardRef((props, ref) => {

  return (
    <>
    <div className='home-container' ref={ref}>
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} alt="" />
        </div>
      </div>
      <Navbar home={props.home} about={props.about} contact={props.contact}/>
    </div>

    <div className='home-container2'>

      <div className='home-text-section'>
        <h1 className='primary-heading' >Baker's Nest - Homemade Delights</h1>
        <p className='primary-text'>At Baker's Nest, we believe that every day should begin and end with something sweet. Our artisanal bakery is a haven for those who crave the delightful symphony of flavors and the comforting aroma of freshly baked treats.</p>
        <button className='secondary-button' id='removed'>
          <a href="https://wa.me/c/918595714343" target="_blank">
            Order now <WhatsApp />
          </a>
        </button>
      </div>

      <div className='home-image-container'>
        <img id='homepage-image' src={BannerImage2} alt="" />
      </div>

    </div>
    </>
  )
})

export default Home