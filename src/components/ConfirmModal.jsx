import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const ModalTitle = styled.h3`
  margin-bottom: 1rem;
  color: #333;
  font-size: 1.5rem;
`;

const ModalMessage = styled.p`
  margin-bottom: 2rem;
  color: #666;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  color: white;

  &:hover {
    background-color: #5a6268;
  }
`;

const ConfirmButton = styled(Button)`
  background-color: #dc3545;
  color: white;

  &:hover {
    background-color: #c82333;
  }
`;

export const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onCancel}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitle>{title}</ModalTitle>
        <ModalMessage>{message}</ModalMessage>
        <ButtonContainer>
          <CancelButton onClick={onCancel}>Cancelar</CancelButton>
          <ConfirmButton onClick={onConfirm}>Eliminar</ConfirmButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};
