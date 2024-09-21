import React, { useState } from "react";
import Products from "../Components/products";
import '../Stylesheets/shop.css';
import DesignStyles from "../Components/designStyles";
import Navbar from "../Components/Navbar";
import Designers from "../Components/designers";

const Home = () => {
    const [view, setView] = useState('designStyles');

    return (
        <>
        <Navbar/>
            <div className="shop-head">
                <h1>
                    {view === 'designStyles' && 'DESIGN STYLES'}
                    {view === 'products' && 'PRODUCTS'}
                    {view === 'designers' && 'DESIGNERS'}
                </h1>
                <div className="next-link">
                    <button onClick={() => setView('designStyles')}>Design Styles</button>
                    <button onClick={() => setView('products')}>Products</button>
                    <button onClick={() => setView('designers')}>Designers</button>
                </div>
            </div>
            {view === 'designStyles' && <DesignStyles />}
            {view === 'products' && <Products />}
            {view === 'designers' && <Designers />}
        </>
    );
}

export default Home;
