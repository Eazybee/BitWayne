import React, { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';
import Head from './Header/Header';
import Foot from './Footer/Footer';

const Footer: FC<{}> & {
  Styled: StyledComponent<'section', any, {}>;
} = () => (
  <Footer.Styled>
    <Head />
    <Foot />
  </Footer.Styled>
);

Footer.Styled = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export default Footer;
