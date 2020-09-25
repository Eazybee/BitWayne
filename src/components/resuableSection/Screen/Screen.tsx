import React, { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';
import LazyLoad from '<components>/ui/LazyLoad';
import styles, { Props } from './styled.css';
import HomeBg from '<assests>/images/hmBg.png';


const Screen: FC<Props> & {
  Styled: StyledComponent<'section', any, Props>;
} = ({ otherPg, imgSrc, title }: any) => (
  <Screen.Styled otherPg={otherPg}>
    <div>
      <LazyLoad imgSrc={otherPg ? imgSrc : HomeBg} alt="" offsetVertical={0} />
      <div>
        {
            otherPg ? (
              <h1>{title}</h1>
            ) : (
              <>
                <div className="homePage">
                  <h1>A better way to sell your giftcards</h1>
                  <p>
                    We buy gift cards e.g iTunes card, Amazon, Steam,
                    Walmart, Sephora, Googleplay, e.t.c.
                    {' '}
                    All for amazing naira rates and payment is instant.
                  </p>
                  <a href="# ">Sell Now</a>
                </div>
              </>
            )
          }
      </div>
    </div>
  </Screen.Styled>
);

Screen.Styled = styled.section`
  ${styles}
`;


export default Screen;
