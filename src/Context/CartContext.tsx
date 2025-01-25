import { createContext, useContext, useEffect, useState } from 'react';
import { CartItemProps } from '../interfaces';

interface CartContextProps {
    cart: CartItemProps[];
    categorizedItems: { [category: string]: (CartItemProps & { quantity: number })[] };
    addToCart: (item: CartItemProps) => void;
    removeFromCart: (item: CartItemProps) => void;
    setShowCart: (showCart: boolean) => void;
    showCart: boolean;
}

interface CartProviderProps {
    children: React.ReactNode;
}

const CartContext = createContext<CartContextProps>({
    cart: [],
    categorizedItems: {},
    addToCart: () => {},
    removeFromCart: () => {},
    setShowCart: () => {},
    showCart: false,
});

export interface CategorizedItems {
    [category: string]: (CartItemProps & { quantity: number })[];
}

// Fonction pour regrouper les articles par catégorie et titre, puis calculer la quantité
const groupItemsByCategoryAndTitle = (items: CartItemProps[]) => {
    const categoryOrder = ["Starters", "Jap'", "Thaï", "Desserts"];

    const categorized = items.reduce<CategorizedItems>((acc, item) => {
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

    // Trier les catégories selon l'ordre défini
    const sortedCategorized: CategorizedItems = {};
    categoryOrder.forEach(category => {
        if (categorized[category]) {
            sortedCategorized[category] = categorized[category];
        }
    });

    return sortedCategorized;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItemProps[]>(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [ showCart, setShowCart ] = useState<boolean>(false);
    const [ categorizedItems, setCatgorizedItems] = useState<CategorizedItems>({});
    const categoryOrder = ["Starters", "Jap", "Thai", "Desserts"];
    
    useEffect(() => {
        setCatgorizedItems(groupItemsByCategoryAndTitle(cart));
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartItemProps) => {
        const existingItem = cart.find(cartItem => cartItem.title === item.title);
        if (existingItem) {
            existingItem.quantity += 1;
            setCart([...cart]);
        } else {
            const newItem = { ...item, quantity: 1 };
            const newCart = [...cart, newItem];
            newCart.sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category));
            setCart(newCart);
        }
    };
    

    const removeFromCart = (item: CartItemProps) => {
        const existingItem = cart.find(cartItem => cartItem.title === item.title);
        if (existingItem) {
            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                setCart([...cart]);
            } else if (existingItem.quantity === 1) {
                setCart(cart.filter(cartItem => cartItem.title !== item.title));
            }
        }
    };

    return (
        <CartContext.Provider value={{ cart, categorizedItems, showCart, addToCart, removeFromCart, setShowCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);