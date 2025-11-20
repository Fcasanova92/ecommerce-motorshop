import React from "react";
import styled from "styled-components";
import moto from "@/assets/img/products/motorcycle.png";
import { useNavigate } from "react-router";
import { PathConfig } from "@/utils/pathConfig";
import { useCartContext } from "@/context/CartContext";

const StyledCard = styled.article`
  overflow: hidden;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 2px 8px -1px #4a4a4a;
  transition: box-shadow ease-in-out 300ms, transform ease-in-out 300ms;
  transform: scale(0.7);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 8px 16px -2px #6a6a6a;
    transform: scale(0.7) translateY(-2px);
  }
`;

const Media = styled.div``;

const CardThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const SupportingText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.42rem;
  gap: 0.14rem;
`;

const Overline = styled.p`
  color: #6e6e6e;
  font-size: 0.52rem;
  font-weight: 300;
  letter-spacing: 2.8px;
`;

const TitleC = styled.h3`
  color: #4c4c4c;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.56px;
`;

const Caption = styled.p`
  color: #8e8e8e;
  font-size: 0.61rem;
  font-weight: 500;
  letter-spacing: 0.28px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.14rem;
`;

const BodyB = styled.p`
  color: #4d4d4d;
  font-size: 0.79rem;
  font-weight: 300;
  line-height: 1.1rem;
  letter-spacing: 0.28px;
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
  align-items: baseline;
`;

const PriceTitle = styled.h4`
  color: #8d8d8d;
  font-weight: 700;
  font-size: 0.86rem;
  letter-spacing: 0.6px;
`;

const PriceAmount = styled.span`
  color: #7CB342;
  font-weight: 300;
  font-size: 0.76rem;
`;

const Actions = styled.ul`
  display: flex;
  gap: 0.2rem;
  justify-content: space-between;
  list-style: none;
`;

const SeeIcon = styled.span`
  color: #8d8d8d;
  font-size: 1rem;
  letter-spacing: 0.4px;
  align-self: center;
  cursor: pointer;
  transition: color 600ms;

  &:hover {
    color: #3044b5;
  }
`;

const AddToCartButton = styled.button`
  background-color: #5e6061;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 0.9rem;
  outline: none;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Card = ({data}) => {

  const navigate = useNavigate();
  const {agregarProducto} = useCartContext();

  const handleCardClick = () => {
    navigate(PathConfig.Product, {state: {product:data}});
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    agregarProducto({...data, id: data.id});
  };

  return (
    <StyledCard onClick={handleCardClick}>
      <Media>
        <CardThumbnail
          src={moto}
          alt="Imagen a modo de referencia del producto."
        />
      </Media>

      <SupportingText>
        <Overline>MODELO</Overline>
        <TitleC>{data.modelo}</TitleC>
        <Caption>
          {data.nombre}
        </Caption>
        <BodyB>{data.descripcion}</BodyB>

        <Footer>
          <Price>
            <PriceTitle>Precio: </PriceTitle>
            <PriceAmount>{data.precio}</PriceAmount>
          </Price>

          <Actions>
            <AddToCartButton
              onClick={handleAddToCart}
            >
              🛒 Agregar al carrito
            </AddToCartButton>
          </Actions>
        </Footer>
      </SupportingText>
    </StyledCard>
  );
};