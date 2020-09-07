import React, { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';
// @ts-ignore
import LazyLoad from 'react-lazy-load';
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
            I am trying to import images to use inside a
            React component with TypeScript...
            <a href="# ">Read more</a>
          </p>
        </div>
        <div className="contacts">
          <h2>Contact Us</h2>
          <ul>
            <li><a href="tel:+234805678923">+234805678923</a></li>
            <li><a href="tel:+234805678923">+234805678923</a></li>
            <li><a href="mailto:loadAm@somthing.com">loadAm@somthing.com</a></li>
          </ul>
        </div>
        <div className="links">
          <h2>Helpful Links</h2>
          <ul>
            <li><a href="# ">Services</a></li>
            <li><a href="# ">Support</a></li>
            <li><a href="# ">Terms &amp; Condition</a></li>
          </ul>
        </div>
        <div className="social">
          <h2>Social</h2>
          <div>
            <a href="https://fb.com/">
              <LazyLoad debounce={false} offsetVertical={300}>
                <img src={Facebook} alt="facebook icon" />
              </LazyLoad>
            </a>
            <a href="https://twitter.com/">
              <LazyLoad debounce={false} offsetVertical={300}>
                <img src={Twitter} alt="Twitter icon" />
              </LazyLoad>
            </a>
            <a href="https://instagram.com/loadam.com.ng">
              <LazyLoad debounce={false} offsetVertical={300}>
                <img src={Instagram} alt="Instagram icon" />
              </LazyLoad>
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
