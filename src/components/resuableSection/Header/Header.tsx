/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
  useState, useEffect, FC, useContext, useCallback,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import _debounce from 'lodash.debounce';
import styled, { StyledComponent, ThemeContext } from 'styled-components';
import { UserContext } from '<contexts>/User';
import Button from '<components>/ui/Button/Button';
import { logOut } from '<contexts>/UserAction';
import { headerStyles, firstDivStyles, Props } from './styled.css';
import { ThemeType } from '<hooks>/useTheme';
import getScroll from '<helpers>/scroll';
import Logo from '<assests>/icons/logo.png';
import useComponentVisible from '<hooks>/useComponentVisible';


interface State {
  toggle: boolean;
  hidden: boolean;
  background: string;
}

const Header: FC<{}> & {
  Styled: StyledComponent<'header', any, Props>;
  FirstDiv: StyledComponent<'div', any, Props>;
} = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [styles, setStyles] = useState<State>({
    toggle: false,
    hidden: true,
    background: 'transparent',
  });
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAuth = location.pathname === '/auth';
  const transBg = location.pathname === '/cards' || isAuth;
  const { colors } = useContext(ThemeContext) as ThemeType;
  const { user, dispatch } = useContext(UserContext);

  const { toggle } = styles;

  useEffect(() => {
    if (transBg) {
      setStyles((style) => ({
        ...style,
        background: colors.primary,
      }));
    }
  }, [colors.primary, transBg]);


  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!transBg) {
      const update = _debounce(() => {
        const scroll = getScroll();

        if (scroll.y > 150 && styles.background !== colors.primary) {
          setStyles({
            ...styles,
            background: colors.primary,
          });
        }

        if (!isComponentVisible && scroll.y <= 150 && styles.background !== 'transparent') {
          setStyles({
            ...styles,
            background: 'transparent',
          });
        }
      }, 15);

      window.addEventListener('scroll', update);

      return () => window.removeEventListener('scroll', update);
    }
  }, [colors.primary, isComponentVisible, transBg, styles, styles.background]);


  const onCLick = useCallback(() => {
    const newStyles: {
      toggle?: boolean;
      hidden?: boolean;
      background?: string;
    } = {};

    const scroll = getScroll();
    if (toggle && !transBg && scroll.y <= 150) {
      newStyles.background = 'transparent';
    } else {
      newStyles.hidden = toggle;
      newStyles.background = colors.primary;
    }

    setIsComponentVisible(!toggle);

    setStyles((stl) => ({
      ...stl,
      ...newStyles,
      toggle: !toggle,
    }));
  }, [colors.primary, setIsComponentVisible, toggle, transBg]);

  useEffect(() => {
    if (toggle !== isComponentVisible) {
      onCLick();
    }
  }, [isComponentVisible, onCLick, toggle]);


  return (
    <Header.Styled styles={styles} ref={ref} isAuth={user?.emailVerified}>
      <div>
        <Header.FirstDiv styles={styles} isAuth={user?.emailVerified}>
          <div>
            <Link to="/">
              <div>
                <img src={Logo} alt=" " />
                <h1>LoadAm</h1>
              </div>
              <p>Secure and fast exchanger</p>
            </Link>
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
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink exact to="/cards">Cards</NavLink>
              </li>
              <li>
                <NavLink exact to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink exact to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </Header.FirstDiv>
        <div>
          <ul>
            <li>
              {user
                ? (
                  <Button type="button" onClick={() => logOut(dispatch)}>
                    Log out
                  </Button>
                ) : isHome
                  ? <a href="#subscription" className="btnE">Subscribe</a>
                  : <Link to="/#subscription" className="btnE">Subscribe</Link>}

            </li>
          </ul>
        </div>
      </div>
    </Header.Styled>
  );
};

Header.Styled = styled.header`
  ${headerStyles}
`;
Header.FirstDiv = styled.div`
  ${firstDivStyles}
`;

export default Header;
