import React, { useState } from "react";
import "../Stylesheets/Navbar.css"
import { IoLogoReact } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Menu, X } from "lucide-react";

const Navbar =()=>{
    const [buttonOpen, setButtonOpen] = useState(false);

    const toggle = () => {
        if(buttonOpen) { setButtonOpen(false) }
        else{ setButtonOpen(true) }
    }

    const delayClose = ()=>{
        setTimeout(() => {
            setButtonOpen(false)
        }, 100);
        
    };

    return(
        <>
        <div className="navbar">
            <div className="nav-left">
                <Link to='/'><div className="logo-wrap"></div></Link>
            </div>

            <div className="nav-mid">
                <NavLink to='/' id='link'><div className="nav-option"><p>Home</p></div></NavLink>
                <NavLink to='/shop' id='link'><div className="nav-option"><p>Shop</p></div></NavLink>
                <NavLink to='/about' id='link'><div className="nav-option"><p>About</p></div></NavLink>
                <NavLink to='/contact-page' id='link'><div className="nav-option"><p>Contact Us</p></div></NavLink>
            </div>

            <div className="nav-right">
                <div className="nav-right-wrap">
                    <Link to='/login' id='login-link'><div className="login-wrap"><p>Log In</p></div></Link>
                    <div className="signin-wrap">
                        <Link to='/signup'><button className='nav-butn'>Sign Up</button></Link>
                    </div>
                </div>
            </div>



            <div className="nav-burger" tabIndex={-1} onClick={toggle}
                onBlur={delayClose}>

                {
                    !buttonOpen?
                    <Menu size={30} color="#2D2D2D" />
                    :
                    <X size={30} color="#2D2D2D" />
                }
                

                {buttonOpen && (
                    <div className="nav-burger-drop-menu">
                        <NavLink to='/' id='drop-link'>
                            <div className="drop-menu-option">
                            <p>Home</p>
                            </div>
                        </NavLink>
                        <NavLink to='/shop' id='drop-link'>
                        <div className="drop-menu-option">
                            <p>Shop</p>
                        </div>
                        </NavLink>
                        <NavLink to='/about' id='drop-link'>
                        <div className="drop-menu-option">
                            <p>About</p>
                        </div>
                        </NavLink>
                        <NavLink to='/contact-page' id='drop-link'>
                        <div className="drop-menu-option">
                            <p>Contact Us</p>
                        </div>
                        </NavLink>

                        <Link to='/signup' id="burger-link">
                            <div className="drop-menu-option">
                                <p>Sign up</p>
                            </div>
                        </Link>

                        <Link to='/login' id="burger-link">
                            <div className="drop-menu-option">
                                <p>Log in</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
            
        </div>
        </>
    )
}
export default Navbar