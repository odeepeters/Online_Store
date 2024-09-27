// import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react';

const CardContext = createContext();

export const useCard = () => useContext(CardContext);

export const CardProvider = ({ children }) => { 
    const [cartItems, setCartItems] = useState(() => {
        const localData = localStorage.getItem('cartItems');
        return localData? JSON.parse(localData) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const itemInCart = prevItems.find((i) => i._id === item._id);
            if (itemInCart) {
                return prevItems.map((i) =>
                    i._id === item._id? {...item, quantity: item.quantity + 1 } : i
                );
            } else {
                return [...prevItems, {...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => {
            return prevItems
            .map((item) => 
                item._id === id ? {...item, quantity: item.quantity - 1} : item
        )
        .filter((item) => item.quantity > 0);
        });

    };

    const decreaseCartItemQuantity = (id) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
                item._id === id && item.quantity >= 1 
            ? {...item, quantity: item.quantity - 1 }
            : item

            ).filter((item) => item.quantity > 0);
        });
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
        
    };



  return (
   <cartItems.Provider value={{
    cartItems,
    addToCart,
    removeFromCart,
    decreaseCartItemQuantity,
    clearCart
   }}>

     {children}
   </cartItems.Provider>
  )
}

export default CardContext
