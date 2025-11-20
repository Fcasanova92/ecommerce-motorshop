import styled, { css } from 'styled-components';

const getTextStyles = (className) => {
  if (className?.includes('body-a')) {
    return css`
      color: #4c4c4c;
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.4rem;
      letter-spacing: 0.2px;
    `;
  }
  if (className?.includes('body-b')) {
    return css`
      color: #4d4d4d;
      font-size: 0.86rem;
      font-weight: 300;
      line-height: 1.2rem;
      letter-spacing: 0.4px;
    `;
  }
  if (className?.includes('body-c')) {
    return css`
      color: #8d8d8d;
      font-size: 0.8rem;
      font-weight: 500;
      line-height: 0.86rem;
      letter-spacing: 0.1px;
    `;
  }
  return '';
};

const StyledP = styled.p`
  ${props => getTextStyles(props.className)}
`;

export const Text = ({ children, className }) => {
  return <StyledP className={className}>{children}</StyledP>;
};