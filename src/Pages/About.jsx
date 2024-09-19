import React from "react";
import '../Stylesheets/About.css'
import '../Stylesheets/Aboutresponsiveness.css'
import Navbar from "./Navbar";
import imageOne from '../assets/Beverly-Hills-Luxury-Interiors-Sophisticated-and-Functional-Interiors-7.jpg'
import imegeTwo from '../assets/NGNlZWRhM2QtOWFiYS00YWE2LWE4ZmEtZDE4ZTk5MTIyNGZk_best_of_luxury_interiors_interior_design_in_london___luxdeco.com_7826f8f2-c64b-4c53-b5ba-7376ac7ad37a.avif'
import imageThree from '../assets/LivingRoom/livingroom1.jpg'
import imageFour from '../assets/LivingRoom/livingroom1.jpg'


const About =()=>{
    return(
        <>
        <Navbar/>
            <div className="aboutContainer">
                <div className="whatWeDo">
                    <h1>WHAT WE DO</h1>
                    <h2 className="strategy">LUXURY DESIGNS, SMART AND TRENDY</h2>
                    <p>We are a luxury interior brand with the vision of offerring innovative and superior quality products and designs to our customers. We specialise in providing an exceptional online shopping experience.
                    </p>
                </div>
                <div className="development">
                    <div className="design">
                        <img src={imageOne} alt="" />
                        <div className="text">
                            <h4>LUXURY</h4>
                            <p>Curating luxurious interiors that reflect your refined taste where every detail is a masterpiece</p>
                        </div>
                    </div>
                    <div className="design">
                        <img src={imegeTwo} alt="" />
                        <div className="text">
                            <h4>SMART</h4>
                            <p>Transforming Spaces, Live and Experiencing the Art of Luxury Design.</p>
                        </div>
                    </div>
                    <div className="design">
                        <img src={imageFour} alt="" />
                        <div className="text">
                            <h4>DESIGN</h4>
                            <p>Smart Spaces, Smarter Living. <br /> Expertly crafting intelligent spaces that simplify life. <br />Where technology and design converge</p>
                        </div>
                    </div>
                    <div className="design">
                        <img src={imageThree} alt="" />
                        <div className="text">
                            <h4>TRENDY</h4>
                            <p> Unparalleled Elegance and Unmatched Quality <br /> Expertly crafting luxury spaces that inspire.</p>
                        </div>
                    </div>
                </div>
                <div className="Team"> 
                    <h1>MEET THE TEAM</h1>
                    <div className="picFrames">
                    <div className="frame1">
                        <img src="src/assets/organize.png" alt="" />
                        <div className="frameTexts">
                            <h6>Paulinus Okonkwo</h6>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className="frame2">
                        <img src="src/assets/plan.png" alt="" />
                        <div className="frameTexts">
                            <h6>Tolulope Akinwande</h6>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className="frame1">
                        <img src="src/assets/organize.png" alt="" />
                        <div className="frameTexts">
                            <h6>Agbu Uchenna</h6>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className="frame1">
                        <img src="src/assets/organize.png" alt="" />
                        <div className="frameTexts">
                            <h6>Ejike Justice</h6>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className="frame2">
                        <img src="src/assets/plan.png" alt="" />
                        <div className="frameTexts">
                            <h6>Lewis Stephanie</h6>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className="frame1">
                        <img src="src/assets/organize.png" alt="" />
                        <div className="frameTexts">
                            <h6>Morrison Justice</h6>
                            <p>Developer</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About