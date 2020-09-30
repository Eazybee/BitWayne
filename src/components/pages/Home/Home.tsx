import React, { useEffect, FC } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import Feature from './Sections/Feature/Feature';
import Instruction from '<components>/pages/Home/Sections/Instruction/Instruction';
import Subscription from '<components>/pages/Home/Sections/Subscription/Subscription';
import Screen from '<components>/resuableSection/Screen/Screen';


const HomePage: FC<RouteChildrenProps | any> = ({ location }: RouteChildrenProps) => {
  useEffect(() => {
    if (location.hash === '#subscription' && location.pathname === '/') {
      const subSection = document.querySelector('#subscription') as HTMLElement;
      if (subSection) {
        window.scrollTo(0, subSection.offsetTop);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  return (
    <>
      <Screen />
      <Feature />
      <Instruction />
      <Subscription />
    </>
  );
};


export default HomePage;
