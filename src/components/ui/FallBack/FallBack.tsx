import styled from 'styled-components';


const FallBack = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;

  p {
    color: red;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export default FallBack;
