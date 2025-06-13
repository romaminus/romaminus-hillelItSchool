import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState({});

    const addProduct =(product) => {
        setCart(prevCart =>({
            ...prevCart,
            [product.id]: {
                ...product,
                quantity: (prevCart[product.id]?.quantity || 0)+1
            }
        }))
    }
    const renoveProduct =() => {
        setCart(null)
    };
    return (
        <CartContext.Provider value={{cart, addProduct, renoveProduct}}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => useContext(CartContext);