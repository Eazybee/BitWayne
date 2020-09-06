import styled from 'styled-components';
import React from 'react';
import Header from '<components>/ui/Header/Header';
import Feature from '<components>/ui/Feature/Feature';
import Instruction from '<components>/ui/Instruction/Instruction';
import Subscription from '<components>/ui/Subscription/Subscription';
import Footer from '<components>/ui/Footer/Footer';


const HomePage = () => (
  <HomePage.Style>
    <Header />
    <div style={{ paddingTop: '5rem' }}>
      <Feature />
      <Instruction />
      <Subscription />
      <Footer />
    </div>
  </HomePage.Style>
);

HomePage.Style = styled.main``;

export default HomePage;
