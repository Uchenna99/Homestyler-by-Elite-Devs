import React, { useState } from "react";
import "../Stylesheets/Navbar.css"
import { IoLogoReact } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar =()=>{
    let burger = document.querySelector(".burger-icon")
    let burgerClose = document.querySelector(".burger-close")
    const [buttonOpen, setButtonOpen] = useState(true);

    const toggle = () => {
        setButtonOpen(!buttonOpen)
      
    }

    return(
        <>
        <div className="navbar">
            <div className="nav-left">
                <NavLink to='/'><IoLogoReact id='nav-logo'/></NavLink>
            </div>

            <div className="nav-mid">
                <NavLink to='/' id='link'><div className="nav-option"><p>Home</p></div></NavLink>
                <NavLink to='/shop' id='link'><div className="nav-option"><p>Shopping</p></div></NavLink>
                <NavLink to='/about' id='link'><div className="nav-option"><p>About</p></div></NavLink>
                <NavLink to='/contact-page' id='link'><div className="nav-option"><p>Contact Us</p></div></NavLink>
            </div>

            <div className="nav-right">
                <div className="nav-right-wrap">
                    <FiSearch className="search-icon" />
                    <IoCartOutline className="cart-icon" />
                </div>
            </div>

            <div className="nav-burger">
                {/* <RxHamburgerMenu className='burger-icon' onClick={toggle}/> */}
                {/* <AiOutlineClose className="burger-close" onClick={toggle}/> */}

             
                <input type="checkbox" id="checkbox" onClick={toggle}/>
                    <label htmlFor="checkbox" class="toggle">
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </label>

                {!buttonOpen && (
                    <div className="nav-burger-drop-menu">
                        <NavLink to='/' id='drop-link'>
                        <div className="drop-menu-option">
                        <p>Home</p>
                        </div>
                        </NavLink>
                        <NavLink to='' id='drop-link'>
                        <div className="drop-menu-option">
                            <p>Services</p>
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

                        <Link to='/sign-up'><button className='nav-butn drop-butn'>Sign Up</button></Link>
                    </div>
                )}
            </div>
            
        </div>
        </>
    )
}
export default Navbar