import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({ product, addToCart }) => {
    const { image, name, price } = product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price: ${price} </p>
            <button onClick={() => addToCart(product)} className='cart-button'>
                <p className='cart-text'>ADD TO CART</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>
        </div>
    );
};

export default Product;