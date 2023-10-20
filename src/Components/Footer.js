import React from "react";
import Logo4 from "../Assets/Logo4.jpg";
import { BsInstagram } from "react-icons/bs";
import {FaPhone} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer-wrapper">
          <div className="footer-logo-container" id='removed'>
              <a href="https://www.instagram.com/bakersnest2022/" target="_blank"><BsInstagram /> @bakersnest2022</a>
          </div>
          <div className="footer-logo-container" id='removed'>
            <FaPhone /> +91 8595714343
          </div>
    </div>
  )
}

export default Footer