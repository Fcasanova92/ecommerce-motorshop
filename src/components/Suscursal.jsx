import styled from 'styled-components';
import shop from '@/assets/img/branchs/shop.png'

const StyledCard = styled.article`
  overflow: hidden;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 2px 8px -1px #4a4a4a;
  transition: box-shadow ease-in-out 300ms, transform ease-in-out 300ms;

  &:hover {
    box-shadow: 0px 8px 16px -2px #6a6a6a;
    transform: translateY(-2px);
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
  padding: 0.6rem;
  gap: 0.2rem;
`;

const Overline = styled.div`
  color: #6e6e6e;
  font-size: 0.56rem;
  font-weight: 300;
  letter-spacing: 4px;
`;

const TitleC = styled.h3`
  color: #4c4c4c;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  margin-bottom: 0.4rem;
  border-bottom: 1px solid #ccc;
`;

const Address = styled.p`
  color: #4d4d4d;
  font-size: 0.86rem;
  font-weight: 300;
  line-height: 1.2rem;
  letter-spacing: 0.4px;

  i {
    color: #4b4b4b;
    margin-right: 0.4rem;
  }
`;

const Phone = styled.p`
  color: #8d8d8d;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 0.86rem;
  letter-spacing: 0.1px;

  i {
    color: #4b4b4b;
    margin-right: 0.4rem;
  }
`;

export const Sucursal = ({sucursal}) => {

    return(
        <StyledCard>
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