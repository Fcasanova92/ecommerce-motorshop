import React, { createContext, useState, useContext, useCallback } from "react";
import { toast } from "react-toastify";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [productInCart, setProductInCart] = useState([]);

  const agregarProducto = useCallback((data) => {
    setProductInCart(prev => [...prev, data])
    toast.success("Producto agregado al carrito");
  }, []);
  
  const eliminarProducto = useCallback((data) => {
    setProductInCart(prev => 
      prev.filter(product => product !== data)
    )
    toast.info("Producto eliminado del carrito");
  }, []);

  return (
    <CartContext.Provider value={{ productInCart, setProductInCart, agregarProducto, eliminarProducto }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => useContext(CartContext);
