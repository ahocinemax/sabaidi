import React from "react";
import { useCart } from "../Context/CartContext";
import "./CartContainer.css"; // Ajoutez du style pour une meilleure esthétique

export const CartContainer = () => {
    const { cart, categorizedItems, addToCart, removeFromCart } = useCart();

    const handleSubmit = () => {
        window.location.href = "tel:+33140360932";
    };

    return (
        <div className="cart-page">
            <h1 className="cart-title">Votre Panier</h1>
            {Object.keys(categorizedItems).length > 0 ? (
                <div className="cart-mod-items">
                    {Object.entries(categorizedItems).map(([category, items]) => (
                        <div key={category} className="cart-category">
                            <h2 className="cart-category-title">{category}</h2>
                            {items.map((item) => (
                                <div className="cart-mod-item" key={item.title}>
                                    <img
                                        className="cart-item-image"
                                        src={item.imageUrl}
                                        alt={item.title}
                                    />
                                    <div className="cart-item-details">
                                        <h3 className="cart-item-title">{item.title}</h3>
                                        <p className="cart-item-price">{item.price}€</p>
                                        <div className="cart-item-controls">
                                            <button
                                                className="checkout-button"
                                                onClick={() => removeFromCart(item)}
                                            >
                                                -
                                            </button>
                                            <span className="cart-item-quantity">{cart.find(cartItem => cartItem.title === item.title)?.quantity || 0}
                                            </span>
                                            <button
                                                className="checkout-button"
                                                onClick={() => addToCart(item)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className="cart-mod-total">
                        <h3>Total:</h3>
                        <p>
                            {Object.values(cart)
                                .flat()
                                .reduce(
                                    (acc, item) =>
                                        acc + parseFloat(item.price) * item.quantity,
                                    0
                                )
                                .toFixed(2)}€
                        </p>
                    </div>
                    <button className="cart-submit-button" onClick={handleSubmit}>
                        Passer commande
                    </button>
                </div>
            ) : (
                <p className="empty-cart-message">Votre panier est vide.</p>
            )}
        </div>
    );
    
};
