import styled from 'styled-components';
import React from 'react';
import Header from '<components>/ui/Header/Header';
import Feature from '<components>/ui/Feature/Feature';

const HomePage = () => (
  <HomePage.Style>
    <Header />
    <div style={{ paddingTop: '5rem' }}>
      <Feature />
    </div>
  </HomePage.Style>
);

HomePage.Style = styled.main`
`;


export default HomePage;
