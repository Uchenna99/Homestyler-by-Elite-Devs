import React from "react";
import "../Stylesheets/Login.css"
import { Link, NavLink } from "react-router-dom";
import image from "../assets/goggle-logo.png"
import apple from "../assets/apple.png"
const Login = () => { 
    return (
        <>
            <div class="login-container">
                <div class="login-right">
                
                        <div class="login-create">
                            <h1>Welcome</h1>
                            <p>Log in to access your account <span><NavLink to="/signup"> Create Account</NavLink></span></p>
                        </div>
                        <form>
                            <div class="login-inp-placeholder">
                                <label htmlFor="">Email</label>
                                <input type="text" />
                            </div>
                            <div class="login-inp-placeholder">
                                <label htmlFor=" ">Password</label>
                                <input type="text" />
                            </div>
                            <div class="login-inp-placeholder login-lightpurpple">

                            <button id='login-dash'><Link to='/dash' id='login-link'>Log in</Link></button>
                            </div>
                            <div class="login-different">
                                <div class="login-border">
                                    <div className="login-b-bottom"></div>
                                </div>
                                <div class="login-write">
                                    <p>Sign in with</p>
                                </div>
                                <div class="login-border">
                                    <div className="login-b-bottom"></div>
                                </div>
                            </div>
                            <div class="login-inp-placeholder login-ccolor">
                                <div class="login-fi-name account">
                                    <img src={image} alt="" />
                                    <p>Google</p>
                                </div>
                                <div class="login-fi-name login-account">
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

export default Login;