import styled from 'styled-components';

const StyledIcon = styled.i`
  /* El componente usa las clases de Font Awesome directamente */
`;

export const Icon = ({className}) => {
    return(<StyledIcon className={className}></StyledIcon>)
}
