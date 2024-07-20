import { useCart } from "../Context/CartContext";
import { CartItemProps } from "../interfaces";
import "./Cart.css";

export const Cart = () => {
    const { cart, setShowCart, removeFromCart } = useCart();

    interface CategorizedItems {
        [category: string]: (CartItemProps & { quantity: number })[];
    }

    // Fonction pour regrouper les articles par catégorie et titre, puis calculer la quantité
    const groupItemsByCategoryAndTitle = (items: CartItemProps[]) => {
        return items.reduce<CategorizedItems>((acc, item) => {
            const category = item.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            const existingItem = acc[category].find(accItem => accItem.title === item.title);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                acc[category].push({ ...item, quantity: 1 });
            }
            return acc;
        }, {});
    };

    const categorizedItems = groupItemsByCategoryAndTitle(cart);

    return (
        <div className="cart-container">
            <p>Panier</p>
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
                                    <p>{item.price}€</p>
                                </div>
                                <span className="remove-item" onClick={() => removeFromCart(item)}>
                                    <span className="item-quantity-badge">{item.quantity}</span>
                                    <img src="bin.png" style={{ height: "2rem" }} alt="Remove" />
                                </span>
                            </div>
                        ))}
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
