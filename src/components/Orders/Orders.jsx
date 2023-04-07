import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import CartItems from '../CartItems/CartItems';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();

    const [cart, setCart] = useState(savedCart);

    const handleRemoveCartItem = (id) =>{
        const remaining = cart.filter(product => product.id != id);
        setCart(remaining);
        removeFromDb(id);

    }

    const handleDeleteCart = ()  =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container' style={{marginTop:'100px'}}>
            <div className="cart-items-container">
                {
                    cart.map(product => <CartItems
                        key={product.id}
                        product={product}
                        handleRemoveCartItem = {handleRemoveCartItem}
                    ></CartItems>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                handleDeleteCart={handleDeleteCart}
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;