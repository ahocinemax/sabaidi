import React from 'react';
import { CartItemProps } from '../interfaces';
import { useCart } from '../Context/CartContext';

export const CartComponent = () => {
    const  { cart, removeFromCart, addToCart } = useCart();

    return (

        <div>
            <h1>Cart</h1>
            {cart.map((item: CartItemProps, index) => (
                <div key={index}>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    );
}