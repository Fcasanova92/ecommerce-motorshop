import { Helmet } from "react-helmet";
import { useState } from "react";
import styled from "styled-components";
import { MainLayout } from "@/layouts/MainLayout";
import { useProductContext } from "@/context/ProductContext";
import { ProductForm } from "@/components/ProductForm";
import { ConfirmModal } from "@/components/ConfirmModal";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const AdminContainer = styled.div`
  padding: 2rem 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2rem;
`;

const AddButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #218838;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const TableContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: #f8f9fa;
`;

const Th = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #dee2e6;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  border-bottom: 1px solid #dee2e6;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const Td = styled.td`
  padding: 1rem;
  color: #555;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0 0.25rem;
  color: ${props => props.$danger ? '#dc3545' : '#2196f3'};
  font-size: 1.2rem;
  transition: all 0.2s ease;

  &:hover {
    color: ${props => props.$danger ? '#c82333' : '#0056b3'};
    transform: scale(1.2);
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #f5c6cb;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #999;
  font-size: 1.1rem;
`;

export const Admin = () => {
  const { products, loading, error, createProduct, updateProduct, deleteProduct } = useProductContext();
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, formData);
      } else {
        await createProduct(formData);
      }
      setShowForm(false);
      setEditingProduct(null);
    } catch (err) {
      console.error("Error al guardar producto:", err);
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (productToDelete) {
      await deleteProduct(productToDelete.id);
      setShowDeleteModal(false);
      setProductToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setProductToDelete(null);
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Panel de Administración - MOTORSHOP</title>
        <meta name="description" content="Panel de administración de productos de MOTORSHOP" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="container-fluid">
        <AdminContainer>
          <Header>
            <Title>Panel de Administración - Productos</Title>
            {!showForm && (
              <AddButton onClick={handleAddProduct}>
                <FaPlus />
                Agregar Producto
              </AddButton>
            )}
          </Header>

          {error && <ErrorMessage>Error: {error}</ErrorMessage>}

          {showForm && (
            <ProductForm
              initialData={editingProduct}
              onSubmit={handleFormSubmit}
              onCancel={handleFormCancel}
              loading={loading}
            />
          )}

          {!showForm && (
            <TableContainer>
              {loading ? (
                <LoadingMessage>Cargando productos...</LoadingMessage>
              ) : products.length === 0 ? (
                <EmptyMessage>No hay productos disponibles. ¡Agrega el primero!</EmptyMessage>
              ) : (
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Nombre</Th>
                      <Th>Marca</Th>
                      <Th>Precio</Th>
                      <Th>Stock</Th>
                      <Th>Descripción</Th>
                      <Th>Acciones</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {products.map((product) => (
                      <Tr key={product.id}>
                        <Td>{product.nombre}</Td>
                        <Td>{product.marca}</Td>
                        <Td>${parseFloat(product.precio).toLocaleString()}</Td>
                        <Td>{product.stock}</Td>
                        <Td>{product.descripcion?.substring(0, 50)}...</Td>
                        <Td>
                          <ActionButton onClick={() => handleEditProduct(product)} title="Editar">
                            <FaEdit />
                          </ActionButton>
                          <ActionButton 
                            $danger 
                            onClick={() => handleDeleteClick(product)}
                            title="Eliminar"
                          >
                            <FaTrash />
                          </ActionButton>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              )}
            </TableContainer>
          )}
        </AdminContainer>
      </div>

      <ConfirmModal
        isOpen={showDeleteModal}
        title="Confirmar Eliminación"
        message={`¿Estás seguro que deseas eliminar el producto "${productToDelete?.nombre}"? Esta acción no se puede deshacer.`}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </MainLayout>
  );
};
