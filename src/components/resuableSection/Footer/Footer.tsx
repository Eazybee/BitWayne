import React, { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';
import Head from './Header/Header';
import Foot from './Footer/Footer';

const Footer: FC<{}> & {
  Styled: StyledComponent<'footer', any, {}>;
} = () => (
  <Footer.Styled>
    <Head />
    <Foot />
  </Footer.Styled>
);

Footer.Styled = styled.footer`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export default Footer;
