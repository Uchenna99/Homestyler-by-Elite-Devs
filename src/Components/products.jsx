import React, { useState } from "react";
import data from '../Designs.json';
import { MdOutlineGridView } from 'react-icons/md';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { BiFilterAlt } from "react-icons/bi";
import { FaInfo } from "react-icons/fa";
import '../Stylesheets/products.css';

const Products = () => {
    const [gridLayout, setGridLayout] = useState("default");
    const [showFilters, setShowFilters] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);

    const categories = [...new Set(data.products.map(product => product.category))];
    const categorySubcategories = categories.reduce((acc, category) => {
        acc[category] = [...new Set(data.products
            .filter(product => product.category === category)
            .map(product => product.subCategory)
        )];
        return acc;
    }, {});

    const handleGridChange = (layout) => {
        setGridLayout(layout);
    };

    const handleFilterToggle = () => {
        setShowFilters(!showFilters);
    };

    const handleCategorySelect = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(null);
            setSelectedSubCategory(null);
        } else {
            setSelectedCategory(category);
            setSelectedSubCategory(null);
        }
    };

    const handleSubCategorySelect = (subCategory) => {
        setSelectedSubCategory(subCategory);
    };

    const handlePriceSelect = (range) => {
        if (selectedPriceRange === range) {
            setSelectedPriceRange(null);  // Deselect if already selected
        } else {
            setSelectedPriceRange(range);  // Select new price range
        }
    };

    const handleRatingSelect = (rating) => {
        if (selectedRating === rating) {
            setSelectedRating(null);  // Deselect if already selected
        } else {
            setSelectedRating(rating);  // Select new rating
        }
    };

    const filteredProducts = data.products.filter(product => {
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        const matchesSubCategory = !selectedSubCategory || product.subCategory === selectedSubCategory;
        const matchesPrice = !selectedPriceRange || (
            (selectedPriceRange === "$0 - $500" && product.price <= 500) ||
            (selectedPriceRange === "$500 - $1000" && product.price > 500 && product.price <= 1000) ||
            (selectedPriceRange === "$1000 - $1500" && product.price > 1000 && product.price <= 1500) ||
            (selectedPriceRange === "$1500 - $2500" && product.price > 1500 && product.price <= 2500) ||
            (selectedPriceRange === "$2500 - $5500" && product.price > 2500 && product.price <= 5500)
        );
        const matchesRating = !selectedRating || product.rating === selectedRating;

        return matchesCategory && matchesSubCategory && matchesPrice && matchesRating;
    });

    return (
        <>
            <div className="prod-head">
                <div className="prod-filter">
                    <p>All results</p>
                    <div className="prod-display-filter">
                        <MdOutlineGridView id="sml" onClick={() => handleGridChange("default")} />
                        <BsGrid3X3Gap onClick={() => handleGridChange("three")} />
                        <TfiLayoutGrid4 onClick={() => handleGridChange("four")} />
                    </div>
                    <button className="prod-filter-trigger" onClick={handleFilterToggle}>
                        <BiFilterAlt />
                        <p>Filters</p>
                    </button>
                </div>
            </div>
            <div className="prod-filter-wrap" style={{ display: showFilters ? 'flex' : 'none' }}>
                <div className="prod-cat-sub">
                    <h1>Categories & Sub-categories</h1>
                    <div className="fil-box">
                        {categories.map((category, index) => (
                            <div className="filter-cat-box" key={index}>
                                <button 
                                    className="cat" 
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    {category}
                                </button>
                                {selectedCategory === category && (
                                    <div className="subcat-box">
                                        {categorySubcategories[category].map((subCategory, subIndex) => (
                                            <button 
                                                key={subIndex} 
                                                className="subcat" 
                                                onClick={() => handleSubCategorySelect(subCategory)}
                                            >
                                                {subCategory}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="prod-price">
                    <h1>Price</h1>
                    <div className="price-box">
                        {["$0 - $500", "$500 - $1000", "$1000 - $1500", "$1500 - $2500", "$2500 - $5500"].map((range, index) => (
                            <button
                                id="btn-price"
                                key={index}
                                className={selectedPriceRange === range ? 'selected' : ''}
                                onClick={() => handlePriceSelect(range)}
                            >
                                {range}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="prod-rate">
                    <h1>Ratings</h1>
                    <div className="rate-box">
                        {[1, 2, 3, 4, 5].map(rating => (
                            <button 
                                key={rating} 
                                onClick={() => handleRatingSelect(rating)}
                                className={selectedRating === rating ? 'selected' : ''}
                            >
                                {rating}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`product-content ${gridLayout}`}>
                {filteredProducts.length === 0 ? (
                    <p className="no-results">No products found for the selected filters.</p>
                ) : (
                    filteredProducts.map(product => (
                        <div className="product-card" key={product.id}>
                            <div className="product-img" style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <button id="detail-icon">
                                    <FaInfo />
                                </button>
                            </div>
                            <div className="product-details">
                                <div className="detail-texts">
                                    <p>{product.name}</p>
                                    <p>${product.price}</p>
                                    <p>Rating: {product.rating}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default Products;