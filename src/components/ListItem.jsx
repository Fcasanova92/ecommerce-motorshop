import styled from 'styled-components';

const StyledLi = styled.li`
  /* Estilos heredados del reset global */
`;

export const ListItem = ({children, id}) => {
    return(      
    <StyledLi id={id}>
        {children}
    </StyledLi>)
}