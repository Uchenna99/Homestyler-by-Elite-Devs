import React from "react";
import '../Stylesheets/Footer.css'
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer =()=>{
    return(
        <>
           <div class="footer-section">
            <div class="contact-info">
                <div class="phone-contact-info">
                    <div class="footer-logo">
                    </div>
                    <div class="phone-number-wrap">
                        <div className="small-icon">
                            {/* <img src="298855-headset-icon-grey8.svg" alt=""> */}
                        </div>
                        <div class="phone-number">
                            <p class="naija">Nigeria</p>
                            <p class="number">+234-1-2776400</p>
                            <p class="local-nums">Or see our complete list of <a href="">local country numbers</a></p>
                        </div>
                    </div>
                </div>
                {/* <div class="contact-us">
                    <div className="small-icon">
                        <FaRegEnvelope/>
                    </div>
                    <a href="">Contact us</a>
                </div>
                <div class="chat">
                    <div className="small-icon">
                        <img src="chat-discussion-2-icon-grey8.svg" alt="">
                    </div>
                    <a href="">Chat now</a>
                </div> */}
            </div>
            <div class="service-links">
                <div class="footer-links-list">
                    <p>Quick Links</p>
                    <Link to='/shop' className="footer-links-list"><a href="">Shop</a></Link>
                    <Link to='/contact-page' className="footer-links-list"><a href="">Contact Us</a></Link>
                    <Link to='/about' className="footer-links-list"><a href="">About Us</a></Link>
                    <a href="">Find a Partner</a>
                    <a href="">Trials and Demos</a>
                    <a href="">Find Services</a>
                </div>
                <div class="footer-links-list">
                    <p>Trending</p>
                    <a href="">Home Styler Sapphire</a>
                    <a href="">What is GROW with Home Styler?</a>
                    <a href="">What is RISE with Home Styler?</a>
                    <a href="">Artificial Intelligence</a>
                    <a href="">Sustainability</a>
                    <a href="">Partner Ecosystem</a>
                </div>
                <div class="footer-links-list">
                    <p>About Home styler</p>
                    <a href="">Company Information</a>
                    <a href="">Worldwide Directory</a>
                    <a href="">Investor Relations</a>
                    <a href="">Careers</a>
                    <a href="">News and Press</a>
                    <a href="">Events</a>
                    <a href="">Customer Stories</a>
                    <a href="">Newsletter</a>
                </div>
                <div class="footer-links-list">
                    <p>Site Information</p>
                    <a href="">Privacy</a>
                    <a href="">Terms of Use</a>
                    <a href="">Legal Disclosure</a>
                    <a href="">Copyright</a>
                    <a href="">Trademark</a>
                    <a href="">Sitemap</a>
                    <a href="">Text View</a>
                    <a href="">Cookie Preference</a>
                </div>
            </div>
            <div class="service-links-tablet">
                <div class="service-option">
                    <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><g id="slim-arrow-right-1721491035578-djy1b"><path d="m5.8 13c-.21 0-.42-.08-.58-.25-.31-.32-.29-.83.03-1.13l3.79-3.62-3.79-3.62c-.32-.31-.33-.81-.03-1.13.31-.32.81-.33 1.13-.03l4.4 4.2c.16.15.25.36.25.58s-.09.43-.25.58l-4.4 4.2c-.15.15-.35.22-.55.22z"></path></g></svg>
                    <p>Quick Links</p>
                </div>
                <div class="service-option">
                    <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><g id="slim-arrow-right-1721491035578-djy1b"><path d="m5.8 13c-.21 0-.42-.08-.58-.25-.31-.32-.29-.83.03-1.13l3.79-3.62-3.79-3.62c-.32-.31-.33-.81-.03-1.13.31-.32.81-.33 1.13-.03l4.4 4.2c.16.15.25.36.25.58s-.09.43-.25.58l-4.4 4.2c-.15.15-.35.22-.55.22z"></path></g></svg>
                    <p>Trending</p>
                </div>
                <div class="service-option">
                    <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><g id="slim-arrow-right-1721491035578-djy1b"><path d="m5.8 13c-.21 0-.42-.08-.58-.25-.31-.32-.29-.83.03-1.13l3.79-3.62-3.79-3.62c-.32-.31-.33-.81-.03-1.13.31-.32.81-.33 1.13-.03l4.4 4.2c.16.15.25.36.25.58s-.09.43-.25.58l-4.4 4.2c-.15.15-.35.22-.55.22z"></path></g></svg>
                    <Link to='/about' id='tab-abt'><p>About Home Styler</p></Link>
                </div>
                <div class="service-option">
                    <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><g id="slim-arrow-right-1721491035578-djy1b"><path d="m5.8 13c-.21 0-.42-.08-.58-.25-.31-.32-.29-.83.03-1.13l3.79-3.62-3.79-3.62c-.32-.31-.33-.81-.03-1.13.31-.32.81-.33 1.13-.03l4.4 4.2c.16.15.25.36.25.58s-.09.43-.25.58l-4.4 4.2c-.15.15-.35.22-.55.22z"></path></g></svg>
                    <p>Site Information</p>
                </div>
            </div>
        </div>
        <div class="social-handles">
            <div class="social-handle-wrap">
                <FaFacebookF className="smedia-icon"/>
            </div>
            <div class="social-handle-wrap">
                <FaYoutube className="smedia-icon"/>
            </div>
            <div class="social-handle-wrap">
                <FaLinkedinIn className="smedia-icon"/>
            </div>
            <div class="social-handle-wrap">
                <FaTiktok className="smedia-icon"/>
            </div>
        </div>
        </>
    )
}

export default Footer;