/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect } from 'react';
import styled, { StyledComponent } from 'styled-components';
import Button from '<components>/ui/Button/Button';
import useComponentVisible from '<hooks>/useComponentVisible';
import style from './styled.css';


export type Props = {
  data: {
    heading: string,
    introductions: string[],
    requirements: string[],
    images: any[],
    onClick: () => {},
  },
  close: () => any,
};


const Info: FC<Props> & {
  Styled: StyledComponent<'div', any, any>;
} = ({ data, close }: Props) => {
  const { ref, isComponentVisible } = useComponentVisible(true);

  useEffect(() => {
    if (isComponentVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      close();
    }
  }, [close, isComponentVisible]);

  const {
    heading, introductions, requirements, images,
  } = data;

  const buy = (text: string) => {
    window.open(encodeURI(
      `https://wa.me/+2348126090283?text=Hi LoadAm, I want to trade ${text}.
      I acknowledge i have read the requirements needed to trade ${text}`,
    ), 'loadamWhatsapp', 'noopener,noreferrer');
  };

  return (
    <>
      <Info.Styled>
        <div ref={ref}>
          <div className="info">
            <h1>{heading}</h1>
            <div>
              <h2>Introduction</h2>
              {introductions.map((intro) => (
                <p key={intro}>{intro}</p>
              ))}
            </div>
            <div>
              <h2>Requirements</h2>
              {requirements.map((req) => (
                <p key={req}>{req}</p>
              ))}
            </div>
            <div className="imges">
              {images.map((img, ind) => (
                <img src={img} alt={`${heading}'s sample`} key={ind} />
              ))}
            </div>
          </div>
          <div>
            <Button type="button" onClick={() => buy(heading)}>Sell Now</Button>
          </div>
        </div>
      </Info.Styled>
    </>
  );
};

Info.Styled = styled.div`
  ${style}
`;

export default Info;
