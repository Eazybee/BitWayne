import React, { FC, useEffect } from 'react';
import styled, { StyledComponent } from 'styled-components';
import LazyLoad from '<components>/ui/LazyLoad';
import Title from '<components>/ui/Title/Title';
import styles from './styled.css';
import data from './data';

const Feature: FC<{}> & {
  Styled: StyledComponent<'section', any, {}>;
} = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card') as unknown as NodeListOf<HTMLElement>;

    Array.from(cards).forEach((card) => {
      const height = card.clientHeight;
      const width = card.clientWidth;

      card.addEventListener('mousemove', (e: MouseEvent & any) => {
        const xVal = e.layerX;
        const yVal = e.layerY;

        if (xVal < width && yVal < height) {
          const xAxis = -20 * ((yVal - height / 2) / height);
          const yAxis = 20 * ((xVal - width / 2) / width);
          // eslint-disable-next-line no-param-reassign
          card.style.transform = `perspective(500px) scale(1.1) rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
        }
      });

      card.addEventListener('mouseout', () => {
        // eslint-disable-next-line no-param-reassign
        card.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
      });
    });
  }, []);

  return (
    <Feature.Styled id="feature">
      <Title>Key Features</Title>
      <div>
        {data.map(({ imgSrc, heading, subHeading }) => (
          <div className="card" key={heading}>
            <LazyLoad imgSrc={imgSrc} alt="" />
            <div>
              <h2>{heading}</h2>
              <p>{subHeading}</p>
            </div>
          </div>
        ))}
      </div>
    </Feature.Styled>
  );
};

Feature.Styled = styled.section`
  ${styles}
`;

export default Feature;
