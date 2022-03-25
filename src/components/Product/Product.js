import React from 'react';
import './Product.css'

const Product = (props) => {
    const { image, name, price } = props.product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price: ${price} </p>
            <button className='cart-button'>
                <p>ADD TO CART</p>
            </button>
        </div>
    );
};

export default Product;