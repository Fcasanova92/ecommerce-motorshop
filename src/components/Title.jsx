import styled, { css } from 'styled-components';

const getTitleStyles = (className) => {
  if (className?.includes('title-a')) {
    return css`
      color: #2a2a2a;
      font-size: 2.8rem;
      font-weight: 300;
      font-style: italic;
      letter-spacing: 8px;
    `;
  }
  if (className?.includes('title-b')) {
    return css`
      color: #4b4b4b;
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: 2px;
    `;
  }
  if (className?.includes('title-c')) {
    return css`
      color: #4c4c4c;
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: 0.8px;
    `;
  }
  if (className?.includes('title-d')) {
    return css`
      color: #4b4b4b;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 1px;
    `;
  }
  if (className?.includes('overline')) {
    return css`
      color: #6e6e6e;
      font-size: 0.56rem;
      font-weight: 300;
      letter-spacing: 4px;
    `;
  }
  if (className?.includes('caption')) {
    return css`
      color: #8e8e8e;
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.4px;
    `;
  }
  return '';
};

const StyledH1 = styled.h1`
  ${props => getTitleStyles(props.className)}
`;

const StyledH2 = styled.h2`
  ${props => getTitleStyles(props.className)}
`;

const StyledH3 = styled.h3`
  ${props => getTitleStyles(props.className)}
`;

const StyledH4 = styled.h4`
  ${props => getTitleStyles(props.className)}
`;

const StyledH5 = styled.h5`
  ${props => getTitleStyles(props.className)}
`;

const StyledH6 = styled.h6`
  ${props => getTitleStyles(props.className)}
`;

export const Title = ({ children, level = 1, className }) => {
  // Validamos el level
  const safeLevel = level >= 1 && level <= 6 ? level : 1;
  
  const components = {
    1: StyledH1,
    2: StyledH2,
    3: StyledH3,
    4: StyledH4,
    5: StyledH5,
    6: StyledH6,
  };
  
  const TitleTag = components[safeLevel];

  return <TitleTag className={className}>{children}</TitleTag>;
};