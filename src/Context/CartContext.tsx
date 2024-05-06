import { createContext, useContext, useState } from 'react';
import { CartItemProps } from '../interfaces';

interface CartContextProps {
    cart: CartItemProps[];
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
    addToCart: () => {},
    removeFromCart: () => {},
    setShowCart: () => {},
    showCart: false,
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItemProps[]>([]);
    const [ showCart, setShowCart ] = useState<boolean>(false);
    const categoryOrder = ["starters", "jap", "thai", "desserts"];

    const addToCart = (item: CartItemProps) => {
        const newCart = [...cart, item];
        newCart.sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category));
        setCart(newCart);
    
        console.log("Item added to cart:", item);
    };
    

    const removeFromCart = (item: CartItemProps) => {
        var tmp = cart;
        for (var i = 0; i < tmp.length; i++) {
            if (tmp[i].title === item.title) {
                tmp.splice(i, 1);
                break;
            }
        }
        setCart([...tmp]);
    };

    return (
        <CartContext.Provider value={{ cart, showCart, addToCart, removeFromCart, setShowCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);