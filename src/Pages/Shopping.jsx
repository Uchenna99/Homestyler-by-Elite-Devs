import React from "react";
import "../Stylesheets/Shopping.css";

const Shopping = () => {
    return (
        <>

            <div className="container">
                <div className="header-one">
                    <p>Blog</p>
                    <p>Support</p>
                </div>
                <div className="text"><h1>Homestyler</h1></div>
                <div className="product">
                    <div className="show">
                        <p>302 product</p>
                        <p>Show 12</p>
                        <p>Best selling</p>
                    </div>
                   
                </div>
                
                <div className="price">
                    <div className="brand">
                        <div className="brand-text">
                            <h2>Brand</h2>
                        </div>
                        <div className="circle">
                            <div className="cicon"></div>
                            <p>PetraTools</p>
                        </div>
                        <div className="circle">
                            <div className="cicon"></div>
                            <p>PetraGrow</p>
                        </div>
                        <div className="circle">
                            <div className="cicon"></div>
                        </div>
                        <div className="circle">
                            <div className="cicon"></div>
                            <p>PetraProtect</p>
                        </div>
                        <div className="circle">
                            <div className="cicon"></div>
                            <p>Concretite</p>
                        </div>
                        <div className="circle">
                            <div className="cicon"></div>
                            <p>Cleanctite</p>
                        </div>
                    </div>
                    
                    <div className="cart"></div>
                </div>

            </div>
        </>
    )
}

export default Shopping;