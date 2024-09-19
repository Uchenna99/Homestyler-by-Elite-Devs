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
import img1 from "../assets/Kitchen/kitchen9.jpg"
import img2 from "../assets/LivingRoom/livingroom2.jpeg"
import img3 from "../assets/LivingRoom/livingroom4.jpg"
import img4 from "../assets/Dining/dining2.png"
import img5 from "../assets/Kitchen/kitchen4.jpeg"
import img6 from "../assets/Dining/dining1.jpg"
import img7 from "../assets/Bedroom/bedroom3.jpg"
import img8 from "../assets/Bedroom/bedroom2.jpeg"

const HomePage =()=>{
    return(
        <>
        <Navbar/>
        <div className="homepage-wrap">
            <div className="hero-section">
                <div className="hero-image">
                    <div className="hero-text-section">
                        <div className="hero-text">
                            <h2>ELITE INTERIOR DESIGNS</h2>
                            <p>Beautiful interior design services, now within reach.</p>
                        </div>
                        <div className="hero-button">
                            <Link to='/sign-up'><button className="hero-butn">Explore</button></Link>
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
                <div className="gallery-pic">
                    <div className="first-img">
                        <img  src={img3} alt="" />
                    </div>
                    <div className="second-img">
                        <img  src={img2} alt="" />
                    </div>
                    <div className="img-description">
                        <p>Living Rooms</p>
                    </div>
                </div>
                <div className="gallery-pic gallery-pic2">
                    <div className="first-img">
                            <img  src={img5} alt="" />
                        </div>
                        <div className="second-img">
                            <img  src={img1} alt="" />
                        </div>
                        <div className="img-description">
                            <p>Kitchens</p>
                        </div>
                    </div>
                <div className="gallery-pic gallery-pic3">
                    <div className="first-img">
                        <img  src={img7} alt="" />
                    </div>
                    <div className="second-img">
                        <img  src={img8} alt="" />
                    </div>
                    <div className="img-description">
                        <p>Bedrooms</p>
                    </div>
                </div>
                <div className="gallery-pic gallery-pic4">
                    <div className="first-img">
                        <img  src={img4} alt="" />
                    </div>
                    <div className="second-img">
                        <img  src={img6} alt="" />
                    </div>
                    <div className="img-description">
                        <p>Dining</p>
                    </div>
                </div>
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