import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart);
    let item=[];
    for (const product of cart) {
        item=item + product.image
    }

    return (
        <div className='cart-panel'>
            <h2><u>Shopping Cart:</u></h2>
            <p>{item}</p>
        </div>
    );
};

export default Cart;