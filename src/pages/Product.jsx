import React from "react";
import {  useLocation } from "react-router";
import moto from "@/assets/img/products/motorcycle.png";
import { MainLayout } from "@/layouts/MainLayout";
import { useCartContext } from "@/context/CartContext";

export const Product = () => {
  const location = useLocation();
  const product = location.state?.product;
  console.log(product)
  const {agregarProducto} = useCartContext();

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <MainLayout>
      <div className="container-fluid">
        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
            <h2 className="title-b mb-0">Detalle del Producto</h2>
          </div>
          
          <div className="product-viewer fx-deep-shadow-dinamyc fx-move-up">
            <div className="product-image">
              <img
                src={product.image || moto}
                alt={product.nombre}
                draggable="false"
              />
            </div>
            <div className="product-details">
              <h2 className="title-c">{product.nombre}</h2>
              <ul className="features-list">
                <li><strong>Modelo:</strong> {product.nombre}</li>
                <li><strong>Descripción:</strong> {product.descripcion}</li>
                <li><strong>Precio:</strong> {product.precio}</li>
              </ul>
              <button
                className="add-to-cart"
                onClick={() => agregarProducto(product)}
              >
                🛒 Agregar al carrito
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
