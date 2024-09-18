import React from "react";
import '../Stylesheets/About.css'
import '../Stylesheets/Aboutresponsiveness.css'
import Navbar from "./Navbar";

const About =()=>{
    return(
        <>
        <Navbar/>
            <div className="aboutContainer">
                <div className="whatWeDo">
                    <h1>WHAT WE DO</h1>
                    <h2 className="strategy">STRATEGY, MARKETING AND SUPPORT</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis alias quasi sapiente qui sequi aperiam recusandae asperiores aut nobis eveniet rem modi optio expedita, ad nostrum voluptatibus eaque ducimus at!</p>
                </div>
                <div className="development">
                    <div className="design">
                        <img src="" alt="" />
                        <div className="text">
                            <h4>DESIGN</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius, dolore nisi doloribus recusandae ut aliquid nihil. Vero deserunt eos rerum.</p>
                        </div>
                    </div>
                    <div className="design">
                        <img src="" alt="" />
                        <div className="text">
                            <h4>DESIGN</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius, dolore nisi doloribus recusandae ut aliquid nihil. Vero deserunt eos rerum.</p>
                        </div>
                    </div>
                    <div className="design">
                        <img src="" alt="" />
                        <div className="text">
                            <h4>DESIGN</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius, dolore nisi doloribus recusandae ut aliquid nihil. Vero deserunt eos rerum.</p>
                        </div>
                    </div>
                    <div className="design">
                        <img src="" alt="" />
                        <div className="text">
                            <h4>DESIGN</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius, dolore nisi doloribus recusandae ut aliquid nihil. Vero deserunt eos rerum.</p>
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
                            <h6>Paulinus Okonkwo</h6>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className="frame1">
                        <img src="src/assets/organize.png" alt="" />
                        <div className="frameTexts">
                            <h6>Paulinus Okonkwo</h6>
                            <p>Developer</p>
                        </div>
                    </div>
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
                            <h6>Paulinus Okonkwo</h6>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className="frame1">
                        <img src="src/assets/organize.png" alt="" />
                        <div className="frameTexts">
                            <h6>Paulinus Okonkwo</h6>
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