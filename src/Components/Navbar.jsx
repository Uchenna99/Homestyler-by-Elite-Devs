import { useEffect, useState } from "react";
import "../Stylesheets/Navbar.css"
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar =()=>{
    const [buttonOpen, setButtonOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const triggerPoint = 400;

        if (scrollPosition > triggerPoint) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


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
        <div className={`navbar transition-all duration-300 ${scrolled? 'bg-white shadow-sm' : 'bg-transparent'}`}>
            <div className="nav-left">
                <Link to='/'>
                    <p className="logoText">Home Styler</p>
                </Link>
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
                

                    <motion.div className="nav-burger-drop-menu"
                        initial={{ x:250}} animate={buttonOpen?{x:0}:{}} 
                        transition={{duration:0.3, ease:'easeOut'}} >

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

                    </motion.div>
            </div>
            
        </div>
        </>
    )
}
export default Navbar