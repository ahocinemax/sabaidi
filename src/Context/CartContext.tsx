import { createContext, useContext, useState } from 'react';
import { SushiItemProps } from '../interfaces';

interface CartContextProps {
    cart: SushiItemProps[];
    addToCart: (item: SushiItemProps) => void;
    removeFromCart: (item: SushiItemProps) => void;
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
    const [cart, setCart] = useState<SushiItemProps[]>([]);
    const [ showCart, setShowCart ] = useState<boolean>(false);

    const addToCart = (item: SushiItemProps) => {
        setCart([...cart, item]);
        console.log("Item added to cart:", item);
    };

    const removeFromCart = (item: SushiItemProps) => {
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