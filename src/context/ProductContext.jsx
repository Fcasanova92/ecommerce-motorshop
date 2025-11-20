/* eslint-disable react-refresh/only-export-components */
import { config } from "@/config/config";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const ProductContext = createContext();

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext debe usarse dentro de ProductProvider");
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const MOCKAPI_URL = config.apiMockUrl;

  // GET - Obtener todos los productos
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(MOCKAPI_URL);
      if (!response.ok) throw new Error("Error al obtener productos");
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // POST - Crear producto
  const createProduct = async (productData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(MOCKAPI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      if (!response.ok) throw new Error("Error al crear producto");
      const newProduct = await response.json();
      setProducts((prev) => [...prev, newProduct]);
      toast.success("Producto creado exitosamente");
      return newProduct;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // PUT - Actualizar producto
  const updateProduct = async (id, productData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${MOCKAPI_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      if (!response.ok) throw new Error("Error al actualizar producto");
      const updatedProduct = await response.json();
      setProducts((prev) =>
        prev.map((product) => (product.id === id ? updatedProduct : product))
      );
      toast.success("Producto actualizado exitosamente");
      return updatedProduct;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // DELETE - Eliminar producto
  const deleteProduct = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${MOCKAPI_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Error al eliminar producto");
      setProducts((prev) => prev.filter((product) => product.id !== id));
      toast.success("Producto eliminado exitosamente");
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    products,
    loading,
    error,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
