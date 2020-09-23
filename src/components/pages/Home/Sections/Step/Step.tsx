import React, { FC, useState } from 'react';
// @ts-ignore
import LazyLoad from 'react-lazy-load';
import styled, { StyledComponent } from 'styled-components';
import StepIcon from '<assests>/icons/container.svg';
import styles, { Props, Position } from './styled.css';

const Step: FC<Props> & {
  Styled: StyledComponent<'div', any, Props>;
} = (prop: Props) => {
  const [loaded, setLoaded] = useState(false);
  const imgOnLoad: () => void = () => setLoaded(true);


  return (
    <Step.Styled {...prop}>
      <>
        <LazyLoad debounce={false} offsetVertical={300}>
          <img src={StepIcon} alt="" onLoad={imgOnLoad} className={loaded ? 'loaded' : ''} />
        </LazyLoad>

        <div className={`content ${loaded ? '' : 'loading'}`}>
          <h2>{prop.data.header}</h2>
          <p>{prop.data.desc}</p>
        </div>
        <div className="log">
          <LazyLoad debounce={false} offsetVertical={300}>
            <img src={prop.data.icon} alt="" className={loaded ? 'loaded' : ''} />
          </LazyLoad>
          <span />
        </div>
      </>
    </Step.Styled>
  );
};

Step.Styled = styled.div<Props>`
  ${styles}
`;

Step.defaultProps = {
  side: Position.Left,
};

export default Step;
export { Position };
