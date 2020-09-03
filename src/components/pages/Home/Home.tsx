import styled from 'styled-components';
import React from 'react';
import Header from '<components>/ui/Header/Header';
import Feature from '<components>/ui/Feature/Feature';
import Instruction from '<components>/ui/Instruction/Instruction';

const HomePage = () => (
  <HomePage.Style>
    <Header />
    <div style={{ paddingTop: '5rem' }}>
      <Feature />
      <Instruction />
    </div>
  </HomePage.Style>
);

HomePage.Style = styled.main``;

export default HomePage;
