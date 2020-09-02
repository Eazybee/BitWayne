import React, { FC } from 'react';
import styled, { StyledComponent, css, FlattenSimpleInterpolation } from 'styled-components';
import { loaderStyles } from './styled.css';


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
  position: ${({ positionTop }: Props) => (positionTop ? 'relative' : 'static')};
  top: ${({ positionTop }: Props) => positionTop}px;
  height: ${({ height }: Props) => height}px;
  ${loaderStyles}
  ${({ styles }: Props) => styles};
`;


export type Props = {
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
