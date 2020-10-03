import React, { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Link } from 'react-router-dom';
import LazyLoad from '<components>/ui/LazyLoad';
import Foot from '<assests>/images/foot.png';
import styles from './styled.css';


const Header: FC<{}> & {
  Styled: StyledComponent<'div', any, {}>;
} = () => (
  <Header.Styled>
    <div>
      <LazyLoad imgSrc={Foot} alt="" />
      <div className="content">
        <h1>Providing you fast and easy process to sell giftcards</h1>
        <p>For speed and payout assurance</p>
        <Link to="/rates" className="btnE">Sell Now</Link>
      </div>
    </div>
  </Header.Styled>
);

Header.Styled = styled.div`
  ${styles}
`;

export default Header;
