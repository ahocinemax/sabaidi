
import React from 'react';
import { Tooltip } from 'react-tooltip';
import { useCart } from '../Context/CartContext';
import { SushiItemProps, ItemProps } from '../interfaces';

export const Item: React.FC<ItemProps> = ({ title, price, description, imageUrl, customize, openModal }) => {
    const { addToCart, removeFromCart, cart } = useCart();
    const meat: string = "Personnalisez votre viande: choix en bas de page";
    const item: SushiItemProps = { title, price, description, imageUrl, customize };

    return (
        <div className="menu-item">
            <div className="image-part">
                <img className="item-image" src={imageUrl} alt={title} onClick={() => openModal(imageUrl)} />
                <div className="add-container">
                    {cart.find(cartItem => cartItem.title === item.title)?.quantity! > 0 ? (
                        <div className="quantity-control">
                            <img
                                className="add-cart"
                                src="Logo-moins.png"
                                alt="decrement"
                                onClick={() => removeFromCart({ ...item, category: 'Thaï', quantity: cart.find(cartItem => cartItem.title === item.title)?.quantity || 0 })}
                            />
                            <span className="quantity">{cart.find(cartItem => cartItem.title === item.title)?.quantity!}</span>
                            <img
                                className="add-cart"
                                src="Logo-plun.png"
                                alt="increment"
                                onClick={() => addToCart({ ...item, category: "Thaï", quantity: cart.find(cartItem => cartItem.title === item.title)?.quantity! })}
                            />
                        </div>
                    ) : (
                        <div onClick={() => addToCart({ ...item, category: "Thaï", quantity: cart.find(cartItem => cartItem.title === item.title)?.quantity! })}
                        >
                            <img className="add-cart" src="Logo-plus.png" />
                        </div>
                    )}
                </div>
            </div>
            <div className="menu-item-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="meal-info">
                    <p>{price}€</p>
                    {customize === true ?
                        <>
                            <span className="info-meat" data-tooltip-id="my-tooltip" data-tooltip-content={meat} data-tooltip-place="bottom">
                                <img src="infobull.png" alt="Personnalisez votre viande" />
                            </span>
                            <Tooltip id="my-tooltip" className="infobulle" />
                        </> : null}
                </div>
            </div>
        </div>
    );
};