import React, { createContext, useState, useContext, useCallback } from "react";
import { toast } from "react-toastify";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [productInCart, setProductInCart] = useState([]);

  const agregarProducto = useCallback((data) => {
    const isExisting = productInCart.some(product => product.id === data.id);
    if(isExisting){
      toast.error("El producto ya está en el carrito");
      return;
    }
    setProductInCart(prev => [...prev, data])
    toast.success("Producto agregado al carrito");
  }, [productInCart]);
  
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
