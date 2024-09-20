import React, { useState } from "react";
import './designStyles.css';
import { MdOutlineGridView } from 'react-icons/md';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { FaShoppingCart, FaInfo } from 'react-icons/fa';
import data from './Designs.json';

const DesignStyles = () => {
    const [gridLayout, setGridLayout] = useState("default");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedStyle, setSelectedStyle] = useState("");
    const [modalStyle, setModalStyle] = useState({ display: "none" });
    const [selectedDesign, setSelectedDesign] = useState(null);

    const categories = [...new Set(data.designs.map(design => design.category))];
    const styles = [...new Set(data.designs.map(design => design.style))];

    const handleGridChange = (layout) => {
        setGridLayout(layout);
    };

    const filteredDesigns = data.designs.filter(design => {
        return (
            (selectedCategory === "" || design.category === selectedCategory) &&
            (selectedStyle === "" || design.style === selectedStyle)
        );
    });

    const openModal = (design) => {
        setSelectedDesign(design);
        setModalStyle({ display: "flex" });
        console.log(selectedDesign.products)
    };

    const closeModal = () => {
        setModalStyle({ display: "none" });
    };

    return (
        <>
            <div className="des-head">
                <div className="des-filter">
                    <p>All results</p>
                    <div className="display-filter">
                        <MdOutlineGridView id="sml" onClick={() => handleGridChange("default")} />
                        <BsGrid3X3Gap onClick={() => handleGridChange("three")} />
                        <TfiLayoutGrid4 onClick={() => handleGridChange("four")} />
                    </div>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Choose Categories</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <select
                        value={selectedStyle}
                        onChange={(e) => setSelectedStyle(e.target.value)}
                    >
                        <option value="">Choose Trends</option>
                        {styles.map((style, index) => (
                            <option key={index} value={style}>
                                {style}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={`design-style-content ${gridLayout}`}>
                {filteredDesigns.length > 0 ? (
                    filteredDesigns.map((design, index) => (
                        <div className="design-style-card" key={index}>
                            <div className="style-card-img" style={{ backgroundImage: `url(${design.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <button id="detail-icon" onClick={() => openModal(design)}>
                                    <FaInfo />
                                </button>
                            </div>
                            <div className="style-card-details">
                                <div className="detail-texts">
                                    <p>{design.name}</p>
                                    <p> ${design.cost}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No designs match the selected filters.</p>
                )}
            </div>


            <div className="info-modal" style={modalStyle}>
                <div className="main-modal">
                    <div className="main-img" style={{ backgroundImage: `url(${selectedDesign?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="main-details">
                        <div className="main-text">
                            <span>Name: </span>
                            <p>{selectedDesign?.name}</p>
                        </div>
                        <div className="main-text">
                            <span>Category: </span>
                            <p>{selectedDesign?.category}</p>
                        </div>
                        <div className="main-text">
                            <span>Style: </span>
                            <p>{selectedDesign?.style}</p>
                        </div>
                        <div className="main-text">
                            <span>Description: </span>
                            <p>{selectedDesign?.description}</p>
                        </div>
                        <div className="main-text">
                            <span>Price: </span>
                            <p>${selectedDesign?.cost}</p>
                        </div>
                        <div className="main-text">
                            <span>Items Used: </span>
                            <p>{selectedDesign?.products.map(product => product.name).join(', ')}</p>
                        </div>

                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    );
};

export default DesignStyles;
