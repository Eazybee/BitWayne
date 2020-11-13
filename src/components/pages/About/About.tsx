import React from 'react';
import styled from 'styled-components';
import Screen from '<components>/resuableSection/Screen/Screen';
import OtherBg from '<assests>/images/Z3.jpg';
import styles from './styled.css';
import ScrollUp from '<components>/ui/ScrollUp/ScrollUp';

export const screenProps = {
  otherPg: true,
  imgSrc: OtherBg,
  title: 'About Us',
};

const AboutPage = () => (
  <>
    <ScrollUp />
    <Screen {...screenProps} />
    <AboutPage.Styled>
      <article>
        <p>
          {`Welcome to Loadam! We’re a digital gift card platform that enables you convert your gift cards to naira from hundreds of top retailers such as Amazon, Steam, iTunes, Starbucks Walmart, BestBuy, Target, and many more.
          Our services also powers loyalty and rewards programs for gift Card peer to peer vendors.`}
        </p>
        <p>
          {`Launched in 2018, we have served our esteemed clients on peer to peer services and now aim to reach out to more clients and build a formidable and trusted exchange.
    `}
        </p>
        <p>
          {`Our team is made up of diverse talents and personalities who have a strong passion for delivering services and meeting customers satifisfaction.  Plus, we’re owned by BitWayne Exchange, which is a trusted firm in management of cryptocurrencies.
        `}
        </p>
      </article>
    </AboutPage.Styled>
  </>
);

AboutPage.Styled = styled.section`
  ${styles}
`;

export default AboutPage;
