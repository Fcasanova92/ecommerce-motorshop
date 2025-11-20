import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchContainer = styled.div`
  background: #000000;
  padding: 2rem 0;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

const SearchWrapper = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 3rem 1rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #aaa;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #667eea;
  font-size: 1.2rem;
  pointer-events: none;
`;

const SearchTitle = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <SearchContainer>
      <div className="container">
        <SearchTitle>Encuentra tu Moto Perfecta</SearchTitle>
        <SearchWrapper>
          <SearchInput
            type="text"
            placeholder="Buscar productos por nombre, marca o modelo..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Buscar productos"
          />
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
        </SearchWrapper>
      </div>
    </SearchContainer>
  );
};
