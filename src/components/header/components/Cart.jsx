import React from "react";
import { Link } from "react-router";
import { ListItem } from "@/components/ListItem";
import { useCartContext } from "@/context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export const CartHeader = () => {
  const { productInCart } = useCartContext();

  return (
    <Link
      className="text-white text-decoration-none"
      to="/cart"
      style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: '1rem', fontWeight: 300 }}
    >
      <FaShoppingCart />
      <span>Carrito</span>

      {productInCart.length > 0 && (
        <span
          style={{
            minWidth: "20px",
            height: "20px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ff4d4f",
            color: "#fff",
            fontSize: "0.7rem",
            padding: "0 6px",
          }}
        >
          {productInCart.length}
        </span>
      )}
    </Link>
  );
};
