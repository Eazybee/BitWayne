import React from 'react';
import styled from 'styled-components';
import LazyLoad from '<components>/ui/LazyLoad';
import styles, { cardStyles } from './styled.css';
import Button from '<components>/ui/Button/Button';
import cards from './data';
import { countriesIcon } from '<helpers>/constants';


const RatesPage = () => (
  <RatesPage.Styled>
    <span />
    <div>
      {cards.map((card) => (
        <Card key={card.title}>
          <>
            <div>
              <LazyLoad imgSrc={card.imgSrc} alt={card.title} />
              <p>{card.title}</p>
              <div className="countries">
                {card.countries.map((countryName) => (
                  <LazyLoad imgSrc={countriesIcon[countryName]} alt={countryName} />
                ))}
              </div>
            </div>
            <Button type="button">LOAD AM</Button>
          </>
        </Card>
      ))}
    </div>
  </RatesPage.Styled>
);

RatesPage.Styled = styled.section`
  ${styles}
`;

const Card = styled.div`
  ${cardStyles}
`;

export default RatesPage;
