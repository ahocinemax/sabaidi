import { useCart } from "../Context/CartContext";
import "./Cart.css"

export const Cart = () => {
    const { cart, setShowCart, removeFromCart } = useCart();
    console.log("cart:", cart);

    return (
        <div className="cart-container">
            <p>Panier</p>
            <span className="close-cart" onClick={() => setShowCart(false)}><img style={{ height: "1.5rem" }} src="cross.png" alt="close cross" /></span>
            { cart?.length ? cart.map((item, index) => (
                <div key={index} className="cart-item">
                    <img className="item-image" src={item.imageUrl} alt={item.title} />
                    <div className="item-details">
                        <h3>{item.title}</h3>
                        <p>{item.price}€</p>
                    </div>
                    <span className="remove-item" onClick={() => removeFromCart(item)}><img src="bin.png" style={{height: "2rem"}}/></span>
                </div>
            )) : 
            <div className="teext">
                <p>Votre panier est vide</p>
            </div>
            }
            <div className="cart-total">
                <p className="cart-price">Total: {cart.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2)}€</p>
            </div>
        </div>
    );
};
