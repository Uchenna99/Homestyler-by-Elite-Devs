import React from "react";
import '../Stylesheets/contact-page.css'
import Navbar from "./Navbar";


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
                  <p>Phone +000099999888877</p>
             </div>
              <div  className="phone-div border">
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
             <h3>IF YOU GOT ANY QUESTIONS PLEASE DO NOT HESITATE TO SEND US A MESSAGE.</h3>
          </div>
          <div className="input-div">
              <input className="input" placeholder="Your Name" type="text"/>
              <input  className="input" placeholder="Your Email" type="text"/>
              <input  className="input" placeholder="Your number" type="text"/>
              <input  className="input" placeholder="Subject" type="text"/>
          </div>
          <button class="btn">Send Message</button>
          <div class="get-in-touch">
              <h2>connect with us !</h2>
          </div>
        </div>
        </>
    )
}


export default ContactPage;