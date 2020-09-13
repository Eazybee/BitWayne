import React, { FC, useState } from 'react';
import styled, { StyledComponent } from 'styled-components';
// @ts-ignore
import LazyLoad from 'react-lazy-load';
import Foot from '<assests>/images/foot.png';
import styles from './styled.css';

const Header: FC<{}> & {
  Styled: StyledComponent<'div', any, {}>;
} = () => {
  const [loaded, setLoaded] = useState(false);
  const imgOnLoad = () => setLoaded(true);

  return (
    <Header.Styled>
      <div>
        <LazyLoad debounce={false} offsetVertical={300}>
          <img src={Foot} alt="" onLoad={imgOnLoad} className={loaded ? 'loaded' : ''} />
        </LazyLoad>
        <div className="content">
          <h1>Providing you fast and easy process to sell giftcards</h1>
          <p>For speed and payout assurance</p>
          <a href="# ">Sell Now</a>
        </div>
      </div>
    </Header.Styled>
  );
};

Header.Styled = styled.div`
  ${styles}
`;

export default Header;
