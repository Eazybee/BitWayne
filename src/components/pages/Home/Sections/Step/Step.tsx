import React, { FC } from 'react';
// @ts-ignore
import LazyLoad from 'react-lazy-load';
import styled, { StyledComponent } from 'styled-components';
import StepIcon from '<assests>/icons/Vector.svg';
import styles, { Props, Position } from './styled.css';

const Step: FC<Props> & {
  Styled: StyledComponent<'div', any, Props>;
} = (prop: Props) => (
  <Step.Styled {...prop}>
    <>
      <LazyLoad debounce={false} offsetVertical={300}>
        <img src={StepIcon} alt="" />
      </LazyLoad>

      <div className="content">
        <h2>{prop.data.header}</h2>
        <p>{prop.data.desc}</p>
      </div>
      <div className="log">
        <LazyLoad debounce={false} offsetVertical={300}>
          <img src={prop.data.icon} alt="" />
        </LazyLoad>
        <span />
      </div>
    </>
  </Step.Styled>
);

Step.Styled = styled.div<Props>`
  ${styles}
`;

Step.defaultProps = {
  side: Position.Left,
};

export default Step;
export { Position };
