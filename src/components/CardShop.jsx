import React from "react";
import styled from "styled-components";
import moto from "@/assets/img/products/motorcycle.png";
import { getRandomMillionDecimalFormatted } from "./helpers/getPrice";
import { useNavigate } from "react-router";
import { PathConfig } from "@/utils/pathConfig";
import { useCartContext } from "@/context/CartContext";
import { FaTrashAlt, FaEye } from "react-icons/fa";

const StyledCard = styled.article`
  overflow: hidden;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 2px 8px -1px #4a4a4a;
  transition: box-shadow ease-in-out 300ms, transform ease-in-out 300ms;
  max-width: 280px;

  &:hover {
    box-shadow: 0px 8px 16px -2px #6a6a6a;
    transform: translateY(-2px);
  }
`;

const Media = styled.div`
  height: 140px;
`;

const CardThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const SupportingText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.15rem;
`;

const Overline = styled.p`
  color: #6e6e6e;
  font-size: 0.5rem;
  font-weight: 300;
  letter-spacing: 3px;
`;

const TitleC = styled.h3`
  color: #4c4c4c;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.6px;
`;

const Caption = styled.p`
  color: #8e8e8e;
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.15rem;
`;

const BodyB = styled.p`
  color: #4d4d4d;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1rem;
  letter-spacing: 0.3px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.4rem;
`;

const Price = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: flex-end;
`;

const PriceTitle = styled.h4`
  color: #8d8d8d;
  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 0.4px;
`;

const PriceAmount = styled.span`
  color: #7CB342;
  font-weight: 300;
  font-size: 0.65rem;
`;

const Actions = styled.ul`
  display: flex;
  gap: 0.15rem;
  justify-content: space-between;
  list-style: none;
`;

const SeeIcon = styled.span`
  color: #8d8d8d;
  font-size: 0.9rem;
  letter-spacing: 0.3px;
  align-self: center;
  cursor: pointer;
  transition: color 600ms;

  &:hover {
    color: #3044b5;
  }
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 0.75rem;
  outline: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    background-color: #c82333;
  }
`;

export const CardShop = ({data}) => {

  const navigate = useNavigate();
  const {eliminarProducto} = useCartContext();

  return (
    <StyledCard>
      <Media>
        <CardThumbnail
          src={moto}
          alt="Imagen a modo de referencia del producto."
        />
      </Media>

      <SupportingText>
        <Overline>MODELO</Overline>
        <TitleC>{data.make}</TitleC>
        <Caption>
          {data.model} | {data.cooling} | {data.year}
        </Caption>
        <BodyB>{data.description}</BodyB>

        <Footer>
          <Price>
            <PriceTitle>Precio: </PriceTitle>
            <PriceAmount>{getRandomMillionDecimalFormatted()}</PriceAmount>
          </Price>

          <Actions>
            <SeeIcon onClick={() => navigate(PathConfig.Product, {state: {product:data}})}>
              <FaEye />
            </SeeIcon>
            
            <RemoveButton
              onClick={() => eliminarProducto(data)}
            >
              <FaTrashAlt /> Eliminar
            </RemoveButton>
          </Actions>
        </Footer>
      </SupportingText>
    </StyledCard>
  );
};
