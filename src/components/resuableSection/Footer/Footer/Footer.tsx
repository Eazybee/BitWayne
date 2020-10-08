import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled, { StyledComponent } from 'styled-components';
import LazyLoad from '<components>/ui/LazyLoad';
import Facebook from '<assests>/icons/fb.svg';
import Twitter from '<assests>/icons/twitter.svg';
import Instagram from '<assests>/icons/instagram.svg';
import styles from './styled.css';


const Footer: FC<{}> & {
  Styled: StyledComponent<'div', any, {}>;
} = () => (
  <Footer.Styled>
    <div>
      <div className="upper">
        <div>
          <h2>About Us</h2>
          <p>
            {`
            Digital gift card platform that enables you convert your gift cards to naira/crypto from hundreds of
            `}
            <Link to="/about"> ...Read more</Link>
          </p>
        </div>
        <div className="contacts">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="tel:+2348126090283">+2348126090283</a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="mailto:loadam.ng.com@gmail.com">loadam.ng.com@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="links">
          <h2>Helpful Links</h2>
          <ul>
            <li>
              <Link to="/cards">Services</Link>
            </li>
            <li>
              <Link to="/contact">Support</Link>
            </li>
          </ul>
        </div>
        <div className="social">
          <h2>Social</h2>
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/waynelawrence.ukaoha">
              <LazyLoad imgSrc={Facebook} alt="facebook icon" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ExchangeLoadam">
              <LazyLoad imgSrc={Twitter} alt="Twitter icon" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/loadam.com.ng">
              <LazyLoad imgSrc={Instagram} alt="Instagram icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="lower">
        <p>&copy;2020</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  </Footer.Styled>
);

Footer.Styled = styled.div`
  ${styles}
`;

export default Footer;
