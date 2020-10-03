import React, { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';
import LazyLoad from '<components>/ui/LazyLoad';
import styles from './styled.css';
import Button from '<components>/ui/Button/Button';
import { countriesIcon } from '<helpers>/constants';


type Props = {
  imgSrc: any,
  title: string,
  countries: string[],
  onClick: () => any,
  delay: number,
};

const Card: FC<Props> & {
  Styled: StyledComponent<'div', any, { delay: number }>;
} = ({
  imgSrc, title, countries, onClick, delay,
}: Props) => (
  <Card.Styled delay={delay}>
    <>
      <div>
        <LazyLoad imgSrc={imgSrc} alt={title} />
        <p>{title}</p>
        <div className="countries">
          {countries.map((countryName) => (
            <LazyLoad imgSrc={countriesIcon[countryName]} key={countryName} alt={countryName} />
          ))}
        </div>
      </div>
      <Button type="button" onClick={onClick}>LOAD AM</Button>
    </>
  </Card.Styled>
);


Card.Styled = styled.div`
  ${styles}
`;

export default Card;
