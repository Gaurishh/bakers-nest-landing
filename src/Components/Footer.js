import React from "react";
import Logo4 from "../Assets/Logo4.jpg";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img id="homepage-image" src={Logo4} alt ="" />
            </div>
            <div className="footer-icons">
                <BsInstagram />
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Careers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className="footer-section-columns">
                <span>244-5333-7783</span>
                <span>hello@food.com</span>
                <span>press@food.com</span>
                <span>contact@food.com</span>
            </div>
            <div className="footer-section-columns">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer