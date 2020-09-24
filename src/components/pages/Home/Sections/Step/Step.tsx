import React, { FC, useState } from 'react';
import styled, { StyledComponent } from 'styled-components';
import LazyLoad from '<components>/ui/LazyLoad';
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
        <LazyLoad imgSrc={StepIcon} alt="" imgOnLoad={imgOnLoad} />

        <div className={`content ${loaded ? '' : 'loading'}`}>
          <h2>{prop.data.header}</h2>
          <p>{prop.data.desc}</p>
        </div>
        <div className="log">
          <LazyLoad imgSrc={prop.data.icon} alt="" />
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
