/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { useState, useEffect, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import _debounce from 'lodash.debounce';
import styled, { StyledComponent } from 'styled-components';
import { headerStyles, firstDivStyles, Props } from './styled.css';

interface State {
  toggle: boolean;
  hidden: boolean;
  background: string;
}

const Header: FC<{}> & {
  Styled: StyledComponent<'header', any, Props>;
  FirstDiv: StyledComponent<'div', any, Props>;
} = () => {
  const [styles, setStyles] = useState<State>({
    toggle: false,
    hidden: true,
    background: 'transparent',
  });

  const { toggle } = styles;

  useEffect(() => {
    const update = _debounce(() => {
      const supportPageOffset = window.pageXOffset !== undefined;
      const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
      const scroll = {
        x: supportPageOffset
          ? window.pageXOffset
          : isCSS1Compat
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft,
        y: supportPageOffset
          ? window.pageYOffset
          : isCSS1Compat
            ? document.documentElement.scrollTop
            : document.body.scrollTop,
      };

      if (scroll.y > 250 && styles.background !== '#ffffff') {
        setStyles({
          ...styles,
          background: '#ffffff',
        });
      }

      if (scroll.y <= 250) {
        setStyles({
          ...styles,
          background: 'transparent',
        });
      }
    }, 15);

    window.addEventListener('scroll', update);

    return () => window.removeEventListener('scroll', update);
  }, []);

  const onCLick = () => {
    const newStyles: {
      toggle?: boolean;
      hidden?: boolean;
      background?: string;
    } = {};

    if (toggle) {
      newStyles.background = 'transparent';
    } else {
      newStyles.hidden = toggle;
      newStyles.background = '#ffffff';
    }

    setStyles({
      ...styles,
      ...newStyles,
      toggle: !toggle,
    });
  };

  return (
    <section>
      <Header.Styled styles={styles}>
        <div>
          <Header.FirstDiv styles={styles}>
            <div>
              <div>
                <div>
                  <img src="../o.png" alt="logo" />
                  <h1>LoadAm</h1>
                </div>
                <p>Secure and fast exchanger</p>
              </div>
              <button
                arial-label={toggle ? 'close menu' : 'show menu'}
                title={toggle ? 'close menu' : 'show menu'}
                onClick={onCLick}
                type="button"
              >
                <FontAwesomeIcon icon={toggle ? faTimes : faBars} />
              </button>
            </div>
            <nav role="navigation">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Products</Link>
                </li>
                <li>
                  <Link to="/">About us</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </nav>
          </Header.FirstDiv>
          <div>
            <ul>
              <li>
                <a href="#">Subscribe</a>
              </li>
            </ul>
          </div>
        </div>
      </Header.Styled>
    </section>
  );
};

Header.Styled = styled.header`
  ${headerStyles}
`;
Header.FirstDiv = styled.div`
  ${firstDivStyles}
`;

export default Header;
