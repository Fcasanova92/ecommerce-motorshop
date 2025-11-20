import styled from 'styled-components';
import shop from '@/assets/img/branchs/shop.png'

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

const Overline = styled.div`
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
  margin-bottom: 0.28rem;
  border-bottom: 1px solid #ccc;
`;

const Address = styled.p`
  color: #4d4d4d;
  font-size: 0.79rem;
  font-weight: 300;
  line-height: 1.1rem;
  letter-spacing: 0.28px;

  i {
    color: #4b4b4b;
    margin-right: 0.28rem;
  }
`;

const Phone = styled.p`
  color: #8d8d8d;
  font-size: 0.74rem;
  font-weight: 500;
  line-height: 0.79rem;
  letter-spacing: 0.07px;

  i {
    color: #4b4b4b;
    margin-right: 0.28rem;
  }
`;

export const Sucursal = ({sucursal}) => {
    const handleClick = () => {
      // Redirigir a Google Maps con una ubicación genérica
      window.open('https://www.google.com/maps/search/motorshop+sucursal/@-34.603722,-58.381592,15z', '_blank');
    };

    return(
        <StyledCard onClick={handleClick}>
              <Media>
                <CardThumbnail src={shop} alt="Sucursal" draggable="false" />
              </Media>
              <SupportingText>
                <Overline>Barrio N°XYZ</Overline>
                <TitleC>{sucursal}</TitleC>
                <Address><i className="fa-solid fa-location-dot"></i>Av. Calle P. Ahí N° 0303</Address>
                <Phone><i className="fa-solid fa-phone"></i> +03 03456 4321</Phone>
              </SupportingText>
        </StyledCard>
    )
}