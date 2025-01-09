import { useCart } from "../Context/CartContext";
import "./Cart.css";
import { Link } from 'react-router-dom';

export const Cart = () => {
    const { cart, categorizedItems, setShowCart, removeFromCart } = useCart();

    return (
        <div className="cart-container">
            <div className="link-to-cart">
                <Link to="/Cart" onClick={() => setShowCart(false)}>Aller au panier</Link>
            </div>
            <span className="close-cart" onClick={() => setShowCart(false)}>
                <img style={{ height: "1.5rem" }} src="cross.png" alt="close cross" />
            </span>
            {
                Object.keys(categorizedItems).length > 0 ? 
                Object.keys(categorizedItems).map(category => (
                    <div key={category} className="category-cart">
                        <h3 className="cart-sub-title">{category}</h3>
                        {categorizedItems[category].map((item, index) => (
                            <div key={index} className="cart-item">
                                <img className="item-image cart-image" src={item.imageUrl} alt={item.title} />
                                <div className="item-details">
                                    <h3>{item.title}</h3>
                                    <div className="content-cart-details">
                                        <p>{item.price}€</p>
                                        <span className="remove-item" onClick={() => removeFromCart(item)}>
                                            <span className="item-quantity-badge">{item.quantity}</span>
                                            <img src="bin.png" style={{ height: "2rem" }} alt="Remove" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )) : 
                <div className="empty-cart">
                    <p>Votre panier est vide</p>
                </div>
            }
            <div className="cart-total">
                <p className="cart-price">Total: {cart.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2)}€</p>
            </div>
        </div>
    );

};
