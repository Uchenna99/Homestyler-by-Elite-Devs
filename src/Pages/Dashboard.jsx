import React from "react";
import "../Stylesheets/Dashboard.css"
import logoimg from "../assets/logo3.png"
import { SiCustomink } from "react-icons/si";
import { IoHomeOutline } from "react-icons/io5";
import { RiArmchairLine } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../Components/Logo";



const Dashboard =()=>{
    return(
        <>
        <div class="cover">
            <div class="left-tab">
                <div class="logo">
                    <Link to='/' className="logo"><img src={logoimg} alt="" /></Link>
                </div>
                <div class="option-tab blue-tab">
                    <IoHomeOutline className="option-logo"/> <b>Home</b>
                </div>
                <div class="option-tab">
                    <SiCustomink className="option-logo"/> <b>Design Styles</b>
                </div>
                <div class="option-tab">
                    <RiArmchairLine className="option-logo"/> <b>Furniture</b>
                </div>
                <Link to='/' id='signout'>
                <div class="option-tab">
                    <PiSignOutBold className="option-logo"/> <b>Sign Out</b>
                </div>
                </Link>
            </div>
            <div class="mid-tab">
                <div class="welcm">
                    <p><b>Welcome</b></p>
                </div>
                <div class="books">
                    <div class="june-books">
                        <h3>Feel free to go through the options and begin your journey with us!</h3>
                    </div>
                </div>
                <div class="tasks-tab">
                    <div class="tasks">
                        <h4>Current Projects</h4>
                    </div>
                    <div class="transact">
                        <div class="lft">
                            <h1>0</h1>
                            <p><span class="two">Ongoing</span> projects require your attention</p>
                        </div>
                        <div class="rght">
                            <i class="bi bi-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div class="june-ins">
                    <div class="june">
                        <h4>Recent Activity</h4>
                    </div>
                    <div class="row1">
                        <div class="lft">
                            <h1>0</h1>
                            <p><span class="two">Payments</span> detected</p>
                        </div>
                        <div class="rght">
                            <i class="bi bi-chevron-right"></i>
                        </div>
                    </div>
                    <div class="row1">
                        <div class="lft">
                            <h1>0</h1>
                            <p><span class="two">Selections</span> detected</p>
                        </div>
                        <div class="rght">
                            <i class="bi bi-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-tab">
                <div class="cookie">
                    <h4>Profile </h4>
                    <div class="jt"><b>HS</b></div>
                </div>
                <div class="contact">
                    <div class="cnt">
                        <h4>Contact your team</h4>
                        <RiCustomerService2Fill className="headphone"/>
                    </div>
                    <div class="row2">
                        <p>Have questons? Reach out to your <br />
                        dedicated team of designers.</p>
                    </div>
                    <div class="row3">
                        <div class="text">
                            <h5>Paulinus Okonkwo</h5>
                            <p>livingroom Interiors</p>
                        </div>
                        <div class="butn">
                            <button>Contact</button>
                        </div>
                    </div>
                    <div class="row3">
                        <div class="text">
                            <h5>Stephanie Lewis</h5>
                            <p>Bedroom Interiors</p>
                        </div>
                        <div class="butn">
                            <button>Contact</button>
                        </div>
                    </div>
                    <div class="row3">
                        <div class="text">
                            <h5>Tolu Akinwande</h5>
                            <p>Kitchen Interiors</p>
                        </div>
                        <div class="butn">
                            <button>Contact</button>
                        </div>
                    </div>
                </div>
                <div class="delivery">
                    <div class="next">
                        <h4>Invite a friend to Home Styler</h4>
                    </div>
                    <div class="date">
                        <p>Know someone who needs Interior design services?
                        You'll both get $100 off coupons when
                        they sign up.</p>
                        <div class="link">
                            <IoCopyOutline/>
                            <p>Copy Link</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
        
        </>
    )
}
export default Dashboard