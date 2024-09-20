import React from "react";
import "../Stylesheets/Signup.css";
import { NavLink } from "react-router-dom";
import image from "../assets/goggle-logo.png"
import apple from "../assets/goggle-logo.png"
import { BiFontFamily } from "react-icons/bi";
// import "../Pages/Login"

const Signup =()=>{
    return(
        <>
        <div class="signup-container">
            <div className="signup-right">
                <div className="signup-create">
                    <h1>Create an account</h1>
                    <p>Already have an account? <span ><NavLink to="/login" style={{color: " white"}} state={{BiFontFamily: ""}}>Login</NavLink></span></p>
                    {/* <p></p> */}
                </div>
                <form>
                    <div class="signup-inp-placeholder">
                    
                            <label htmlFor="">Firstname</label>
                            <input type="text" placeholder="" />
                    </div>
                    <div className="signup-inp-placeholder">
                            <label htmlFor="">Lastname</label>
                            <input type="text" placeholder=""/>
                    </div>
                    <div className="signup-inp-placeholder">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder=""/>
                    </div>
                    <div className="signup-inp-placeholder">
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder=""/>
                    </div>
                    <div className="signup-inp-placeholder signup-lightpurpple">
                        <button>Create account</button>
                    </div>
                    <div className="signup-different">
                        <div className="signup-border"></div>
                        <div className="signup-border signup-write">
                            <p>Or register with</p>
                        </div>
                        <div className="signup-border"></div>
                    </div>
                    <div className="signup-inp-placeholder signup-color">
                        <div className="signup-fi-name signup-account">
                         <img src={image} alt="" />
                            <p>Goggle</p>
                        </div>
                        <div className="signup-fi-name signup-account">
                         <img src={apple} alt="" />
                            <p>Apple</p>
                        </div>
                    </div>
                </form>
            </div>
    </div>
        </>
    )
}
export default Signup;
