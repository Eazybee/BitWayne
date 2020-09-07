import React, { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';
// @ts-ignore
import LazyLoad from 'react-lazy-load';
import Title from '<components>/ui/Title/Title';
import styles from './styled.css';
import data from './data';

const Feature: FC<{}> & {
  Styled: StyledComponent<'section', any, {}>;
} = () => (
  <Feature.Styled id="feature">
    <Title>Key Features</Title>
    <div>
      {data.map(({ imgSrc, heading, subHeading }) => (
        <div className="card" key={heading}>
          <LazyLoad debounce={false} offsetVertical={300}>
            <img src={imgSrc} alt="" />
          </LazyLoad>
          <div>
            <h2>{heading}</h2>
            <p>{subHeading}</p>
          </div>
        </div>
      ))}
    </div>
  </Feature.Styled>
);

Feature.Styled = styled.section`
  ${styles}
`;

export default Feature;
