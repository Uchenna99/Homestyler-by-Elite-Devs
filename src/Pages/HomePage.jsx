import React from "react";
import "../Stylesheets/Homepage.css"
import { Link } from "react-router-dom";
import { IoColorPaletteOutline } from "react-icons/io5";
import { GiPencilRuler } from "react-icons/gi";
import { RiMedalLine } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";
import { MdBusinessCenter } from "react-icons/md";
import { FaInnosoft } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import Navbar from "./Navbar";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoPlaystation } from "react-icons/io";


const HomePage =()=>{
    return(
        <>
        <Navbar/>
        <div className="homepage-wrap">
            <div className="hero-section">
                <div className="hero-image">
                    <div className="hero-text-section">
                        <div className="hero-text">
                            <h2>APTECH TECHRIZZZ</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illum repellendus libero ex, dolorum vel ratione. Possimus architecto minima at!</p>
                        </div>
                        <div className="hero-button">
                            <Link to='/sign-up'><button className="hero-butn">Join Us</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="assurance-section">
                <div className="assurance-card">
                    <div className="card-img"><GiPencilRuler id='assure-icon'/></div>
                    <div className="card-writeup">
                        <h3>Professional Design</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima maiores vitae mollitia corrupti cum voluptate dolores! Quasi cupiditate animi facilis!</p>
                    </div>
                </div>
                <div className="assurance-card">
                    <div className="card-img"><RiMedalLine id='assure-icon'/></div>
                    <div className="card-writeup">
                        <h3>High Quality</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima maiores vitae mollitia corrupti cum voluptate dolores! Quasi cupiditate animi facilis!</p>
                    </div>
                </div>
                <div className="assurance-card">
                    <div className="card-img"><IoColorPaletteOutline id='assure-icon'/></div>
                    <div className="card-writeup">
                        <h3>Fresh Colours</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima maiores vitae mollitia corrupti cum voluptate dolores! Quasi cupiditate animi facilis!</p>
                    </div>
                </div>
            </div>

            <div className="our-services">
                <div className="services-header">
                    <h2>OUR SERVICES</h2>
                </div>
                <div className="services-card-wrap">
                <div className="services-card">
                    <div className="services-card-img img-tech"></div>
                    <div className="services-card-info">
                        <h3>Tech Services</h3>
                        <div className="service-list">
                            <BiChevronRight/>
                            <p>Custom Software Development</p>
                        </div>
                        <div className="service-list">
                            <BiChevronRight/>
                            <p>Custom Software Development</p>
                        </div>
                        <div className="service-list">
                            <BiChevronRight/>
                            <p>Custom Software Development</p>
                        </div>
                    </div>
                    <div className="services-card-logo"><GrTechnology id='scard-logo'/></div>
                </div>
                <div className="services-card">
                    <div className="services-card-img img-business"></div>
                    <div className="services-card-info">
                        <h3>Business Consulting</h3>
                        <div className="service-list">
                            <BiChevronRight/>
                            <p>Custom Software Development</p>
                        </div>
                        <div className="service-list">
                            <BiChevronRight/>
                            <p>Custom Software Development</p>
                        </div>
                        <div className="service-list">
                            <BiChevronRight/>
                            <p>Custom Software Development</p>
                        </div>
                    </div>
                    <div className="services-card-logo"><MdBusinessCenter id='scard-logo'/></div>
                </div>
                <div className="services-card">
                    <div className="services-card-img img-software"></div>
                    <div className="services-card-info">
                        <h3>Software Solutions</h3>
                        <div className="service-list">
                            <BiChevronRight/>
                            <p>Custom Software Development</p>
                        </div>
                        <div className="service-list">
                            <BiChevronRight/>
                            <p>Custom Software Development</p>
                        </div>
                        <div className="service-list">
                            <BiChevronRight/>
                            <p>Custom Software Development</p>
                        </div>
                    </div>
                    <div className="services-card-logo"><FaInnosoft id='scard-logo'/></div>
                </div>
                </div>
                <div className="services-card-butn">
                    <button id="services-butn">Know More</button>
                </div>
            </div>

            <div className="gallery-section">
                <div className="gallery-header">
                    <h2>GALLERY</h2>
                </div>
                <div className="gallery-pic"></div>
                <div className="gallery-pic"></div>
                <div className="gallery-pic"></div>
                <div className="gallery-pic"></div>
            </div>

            {/* <div className="partners-section">
                <div className="partners-header">
                    <h2>OUR PARTNERS</h2>
                </div>
                <div className="partner-logos-holder">
                    <div className="partner-logo-slide">
                        <div className="slide-inner-holder">
                            <div className="logo-img"><IoLogoCss3 id='s-logo'/></div>
                            <div className="logo-img"><IoLogoGithub id='s-logo2'/></div>
                            <div className="logo-img"><IoLogoPlaystation id='s-logo3'/></div>
                            <div className="logo-img"><IoLogoCss3 id='s-logo'/></div>
                            <div className="logo-img"><IoLogoGithub id='s-logo2'/></div>
                            <div className="logo-img"><IoLogoPlaystation id='s-logo3'/></div>
                            <div className="logo-img"><IoLogoCss3 id='s-logo'/></div>
                            <div className="logo-img"><IoLogoGithub id='s-logo2'/></div>
                            <div className="logo-img"><IoLogoPlaystation id='s-logo3'/></div>
                        </div>
                        <div className="slide-inner-holder">
                            <div className="logo-img"><IoLogoCss3 id='s-logo'/></div>
                            <div className="logo-img"><IoLogoGithub id='s-logo2'/></div>
                            <div className="logo-img"><IoLogoPlaystation id='s-logo3'/></div>
                            <div className="logo-img"><IoLogoCss3 id='s-logo'/></div>
                            <div className="logo-img"><IoLogoGithub id='s-logo2'/></div>
                            <div className="logo-img"><IoLogoPlaystation id='s-logo3'/></div>
                            <div className="logo-img"><IoLogoCss3 id='s-logo'/></div>
                            <div className="logo-img"><IoLogoGithub id='s-logo2'/></div>
                            <div className="logo-img"><IoLogoPlaystation id='s-logo3'/></div>
                        </div>
                    </div>
                </div>
            </div> */}
            
            <div className="about-section">
                <div className="about-info">
                    <div className="about-header">
                        <h2>WHY US ?</h2>
                    </div>
                    <div className="about-text">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis animi 
                            modi eum quasi quo excepturi itaque sunt saepe voluptate reiciendis.</p>
                    </div>
                    <div className="about-button">
                        <Link to='/about'><button id='abt-butn'>About Us</button></Link>
                    </div>
                </div>
                <div className="about-img">
                    <div className="about-img-holder"></div>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default HomePage;