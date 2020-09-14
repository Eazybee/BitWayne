import React from 'react';
import Feature from './Sections/Feature/Feature';
import Instruction from '<components>/pages/Home/Sections/Instruction/Instruction';
import Subscription from '<components>/pages/Home/Sections/Subscription/Subscription';
import Screen from '<components>/resuableSection/Screen/Screen';


const HomePage = () => (
  <>
    <Screen />
    <Feature />
    <Instruction />
    <Subscription />
  </>
);


export default HomePage;
