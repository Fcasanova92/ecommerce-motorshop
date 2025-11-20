import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const FormTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #555;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid ${props => props.$hasError ? '#dc3545' : '#ddd'};
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? '#dc3545' : '#2196f3'};
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid ${props => props.$hasError ? '#dc3545' : '#ddd'};
  border-radius: 8px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? '#dc3545' : '#2196f3'};
  }
`;

const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 0.85rem;
  margin-top: -0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #28a745;
  color: white;

  &:hover:not(:disabled) {
    background-color: #218838;
  }
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  color: white;

  &:hover {
    background-color: #5a6268;
  }
`;

export const ProductForm = ({ initialData, onSubmit, onCancel, loading }) => {
  const [formData, setFormData] = useState(
    initialData || {
      nombre: "",
      precio: "",
      descripcion: "",
      marca: "",
      stock: "",
    }
  );

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }

    if (!formData.precio || parseFloat(formData.precio) <= 0) {
      newErrors.precio = "El precio debe ser mayor a 0";
    }

    if (formData.descripcion.length < 10) {
      newErrors.descripcion = "La descripción debe tener al menos 10 caracteres";
    }

    if (!formData.marca.trim()) {
      newErrors.marca = "La marca es obligatoria";
    }

    if (!formData.stock || parseInt(formData.stock) < 0) {
      newErrors.stock = "El stock debe ser mayor o igual a 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Limpiar error del campo cuando el usuario escribe
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <FormContainer>
      <FormTitle>{initialData ? "Editar Producto" : "Agregar Nuevo Producto"}</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="nombre">Nombre *</Label>
          <Input
            id="nombre"
            name="nombre"
            type="text"
            value={formData.nombre}
            onChange={handleChange}
            $hasError={!!errors.nombre}
            placeholder="Ej: Kawasaki Ninja 400"
          />
          {errors.nombre && <ErrorMessage>{errors.nombre}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="marca">Marca *</Label>
          <Input
            id="marca"
            name="marca"
            type="text"
            value={formData.marca}
            onChange={handleChange}
            $hasError={!!errors.marca}
            placeholder="Ej: Kawasaki"
          />
          {errors.marca && <ErrorMessage>{errors.marca}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="precio">Precio *</Label>
          <Input
            id="precio"
            name="precio"
            type="number"
            step="0.01"
            value={formData.precio}
            onChange={handleChange}
            $hasError={!!errors.precio}
            placeholder="Ej: 5000000"
          />
          {errors.precio && <ErrorMessage>{errors.precio}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="stock">Stock *</Label>
          <Input
            id="stock"
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            $hasError={!!errors.stock}
            placeholder="Ej: 10"
          />
          {errors.stock && <ErrorMessage>{errors.stock}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="descripcion">Descripción *</Label>
          <TextArea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            $hasError={!!errors.descripcion}
            placeholder="Describe el producto (mínimo 10 caracteres)"
          />
          {errors.descripcion && <ErrorMessage>{errors.descripcion}</ErrorMessage>}
        </FormGroup>

        <ButtonGroup>
          <CancelButton type="button" onClick={onCancel}>
            Cancelar
          </CancelButton>
          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Guardando..." : initialData ? "Actualizar" : "Crear Producto"}
          </SubmitButton>
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
};
