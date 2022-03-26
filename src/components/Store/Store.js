import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Store.css'

const Store = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const addToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='main-store'>
            <div className='guitar-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2><u>MY CART:</u></h2>
                <p>{cart.length}</p>
            </div>
        </div>
    );
};

export default Store;