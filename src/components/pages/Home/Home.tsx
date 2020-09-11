import styled from 'styled-components';
import React from 'react';
import Header from '<components>/resuableSection/Header/Header';
import Feature from './Sections/Feature/Feature';
import Instruction from '<components>/pages/Home/Sections/Instruction/Instruction';
import Subscription from '<components>/pages/Home/Sections/Subscription/Subscription';
import Footer from '<components>/resuableSection/Footer/Footer';
import Screen from '<components>/resuableSection/Screen/Screen';
import Modal from '<components>/ui/Modal/Modal';
import Chat from '<components>/resuableSection/Chat/Chat';

const HomePage = () => (
  <>
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
    <Modal>
      <Chat />
    </Modal>
  </>
);

HomePage.Style = styled.main``;

export default HomePage;
