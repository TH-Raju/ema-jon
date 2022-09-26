import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css';

const Product = ({ product, handleAddToClick }) => {
    const { name, price, img, seller, ratings } = product


    return (
        <div className="product">
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={() => handleAddToClick(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;