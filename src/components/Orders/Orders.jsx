import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const savedCart = useLoaderData();
    console.log(savedCart);
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h2>Our Products: {savedCart.length}</h2>
            </div>
            <div className="cart-container">
                <Cart cart={savedCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;