import React, { FC } from 'react';
import styled, { StyledComponent, FlattenSimpleInterpolation, css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';

const LoadingSpinner: FC<Props> & {
  Styled: StyledComponent<'div', any, Props>;
} = (props: Props) => {
  const {
    height, positionTop, text, styles, textStyle,
  } = props;

  return (
    <LoadingSpinner.Styled height={height} positionTop={positionTop} styles={styles}>
      <div />
      <p style={textStyle}>{text}</p>
    </LoadingSpinner.Styled>
  );
};

LoadingSpinner.Styled = styled.div`
  ${({ height, positionTop, styles }: Props & { theme: ThemeType }) => `
    text-align: center;
    vertical-align: middle;
    margin: auto;
      height: ${height}px;
      top: ${positionTop};
      position: ${positionTop ? 'relative' : 'static'};


    div {
      display: inline-block;
      width: 25px;
      height: 25px;
      border: 3px solid white;
      border-top: 3px solid #3169cc;
      border-radius: 50%;

      transition-duration: 1.1s;
      transition-property: transform;
      animation-name: rotate;
      animation-duration: 1.1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;


      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }

    p {
      display: inline-block;
      margin-left: 15px;
      vertical-align: top;
      line-height: 25px;
    }
    ${styles}
  `}
`;


type Props = {
  height?: number;
  positionTop?: number;
  text?: string;
  styles?: FlattenSimpleInterpolation;
  textStyle?: React.CSSProperties;
};

LoadingSpinner.defaultProps = {
  height: 100,
  positionTop: 0,
  text: 'Loading',
  styles: css``,
  textStyle: {},
};

export default LoadingSpinner;
