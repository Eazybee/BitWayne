import styled from 'styled-components';


const FallBack = styled.div`
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: red;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    ${({ theme }) => `
      color: ${theme.colors?.textColor};
    `}
  }
`;

export default FallBack;
