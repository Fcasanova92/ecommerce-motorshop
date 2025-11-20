import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style: none;
`;

const StyledOl = styled.ol`
  list-style: none;
`;

export const List = ({ children, type = "ul", className }) => {
  const ListTag = type === "ol" ? StyledOl : StyledUl;

  return <ListTag className={className}>{children}</ListTag>;
};