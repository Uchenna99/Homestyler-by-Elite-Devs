import React from "react";
import '../Stylesheets/contact-page.css'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { X } from "lucide-react";


const ContactPage =()=>{
    return(
        <>
        <Navbar/>
        <div className="contact-div">

            <div className="contact-image">
               <div className="contact-us">
                   <h1>CONTACT US</h1>
               </div>
            </div>


            <div className="get-in-touch">
              <h2>Get in touch with us !</h2>
           </div>


            <div  className="second-part">
                <div class="phone-div">
                    <i class="bi bi-phone"></i>
                    <h3>PHONE</h3>
                    <p>+234 810 680 9601</p>
                </div>

                <div  className="phone-div border1">
                    <i class="bi bi-geo-alt-fill"></i>
                    <h3>ADDRESS</h3>
                    <p>Old Aba Road, Rumuomasi, Rivers State.</p>
                </div>
                    
                <div  className="phone-div">
                    <i class="bi bi-envelope-fill"></i>
                    <h3>EMAIL</h3>
                    <p>elitesdevs1@gmail.com</p>
                </div>

            </div>


            <div  className="send-us-textdiv">
                <h3>IF YOU'VE GOT ANY QUESTIONS PLEASE DO NOT HESITATE TO SEND US A MESSAGE.</h3>
            </div>

            <div className="input-div">
                <input className="input1" placeholder="Your Name" type="text"/>
                <input  className="input1" placeholder="Your Email" type="email"/>
                <input  className="input1" placeholder="Your number" type="number"/>
                <textarea  className="input1 input2" placeholder="Subject" type="text"/>
            </div>

            <button class="btn">Send Message</button>

            <div class="get-in-touch">
                <h2>Connect with us !</h2>
            </div>

            <div className="geo-div">
                <X className="absolute top-2 right-2 bg-red-300 cursor-pointer hover:bg-red-500" />
                <iframe className="geo-location" width="400" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=mbm%20plaza%20old%20aba%20road+(Home%20Styler)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
            </div>

            <Footer/>

        </div>
        </>
    )
}


export default ContactPage;