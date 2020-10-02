import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import styles from './styled.css';
import data from './data';
import Info from './Info/Info';
import Modal from '<components>/ui/Modal/Modal';
import Card from '<components>/resuableSection/Card/Card';
import ScrollUp from '<components>/ui/ScrollUp/ScrollUp';


const RatesPage = () => {
  const [current, setCurent] = useState<any>(null);

  const cards = useMemo(() => (
    <>
      <ScrollUp />
      {data.map((card) => (
        <Card
          key={card.title}
          countries={card.countries}
          imgSrc={card.imgSrc}
          title={card.title}
          onClick={() => setCurent(card.info)}
        />
      ))}
    </>
  ), []);

  return (
    <RatesPage.Styled>
      <span />
      <div>
        {cards}
        {current && <Modal><Info data={current} close={() => setCurent(null)} /></Modal>}
      </div>
    </RatesPage.Styled>
  );
};

RatesPage.Styled = styled.section`
  ${styles}
`;

export default RatesPage;
