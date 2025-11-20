import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 3rem;
  padding: 2rem 0;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: ${props => props.$isComplete ? '#4caf50' : 'linear-gradient(90deg, #2196f3 0%, #1976d2 100%)'};
  border-radius: 10px;
  transition: all 0.4s ease;
  width: ${props => props.$progress}%;
  box-shadow: ${props => props.$isComplete ? '0 0 10px rgba(76, 175, 80, 0.5)' : '0 0 10px rgba(33, 150, 243, 0.3)'};
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const PaginationButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: ${props => props.disabled ? '#cccccc' : '#2196f3'};
  color: white;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${props => props.disabled ? '#cccccc' : '#1976d2'};
    transform: ${props => props.disabled ? 'none' : 'translateY(-2px)'};
    box-shadow: ${props => props.disabled ? '0 2px 4px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.3)'};
  }

  &:active {
    transform: ${props => props.disabled ? 'none' : 'translateY(0)'};
  }
`;

const PageInfo = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  min-width: 150px;
  text-align: center;
`;

export const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const progress = (currentPage / totalPages) * 100;
  const isComplete = currentPage === totalPages;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  if (totalPages <= 1) return null;

  return (
    <PaginationContainer>
      <ProgressBarContainer>
        <ProgressBar $progress={progress} $isComplete={isComplete} />
      </ProgressBarContainer>
      
      <ButtonsContainer>
        <PaginationButton 
          onClick={handlePrevious} 
          disabled={currentPage === 1}
          aria-label="Página anterior"
        >
          <FaChevronLeft />
          Anterior
        </PaginationButton>
        
        <PageInfo>
          Página {currentPage} de {totalPages}
        </PageInfo>
        
        <PaginationButton 
          onClick={handleNext} 
          disabled={currentPage === totalPages}
          aria-label="Página siguiente"
        >
          Siguiente
          <FaChevronRight />
        </PaginationButton>
      </ButtonsContainer>
    </PaginationContainer>
  );
};
