import React from 'react';
import './CartItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const CartItems = ({product, handleRemoveCartItem}) => {
    const {img, name, price, quantity, id} = product
    return (
        <div className='cart-item-box'>
            <div className='cart-item-info'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <h5>Price: <span>$ {price}</span></h5>
                    <h5>Quantity: <span> {quantity}</span></h5>

                </div>
            </div>
            <div >
                <button onClick={() => handleRemoveCartItem(id)} className='btn-delete'><FontAwesomeIcon className='btn-delete-icon' icon={faTrashAlt} /></button>
            </div>
        </div>
    );
};

export default CartItems;