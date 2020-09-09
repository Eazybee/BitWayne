import styled from 'styled-components';
import React from 'react';
import Header from '<components>/resuableSection/Header/Header';
import Feature from './Sections/Feature/Feature';
import Instruction from '<components>/pages/Home/Sections/Instruction/Instruction';
import Subscription from '<components>/pages/Home/Sections/Subscription/Subscription';
import Footer from '<components>/resuableSection/Footer/Footer';
import Screen from '<components>/resuableSection/Screen/Screen';

const HomePage = () => (
  <HomePage.Style>
    <Header />
    <div style={{}}>
      <Screen />
      <Feature />
      <Instruction />
      <Subscription />
      <Footer />
    </div>
  </HomePage.Style>
);

HomePage.Style = styled.main``;

export default HomePage;
