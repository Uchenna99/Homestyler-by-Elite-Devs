import React from "react";
import DesignStyles from "../designStyles";
import '../Stylesheets/shop.css'
import Navbar from "../Components/Navbar";

const Shop=()=>{
    return(
        <>
        <Navbar/>
            <div className="shop-head">
                <h1>DESIGN STYLES</h1>
                <div className="next-link">
                    <button>Design Styles</button>
                    <button>Furniture</button>
                    <button>Designers</button>
                </div>
            </div>
            <DesignStyles/>
        </>
    )
}

export default Shop