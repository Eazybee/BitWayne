import React, { useState } from 'react';
// @ts-ignore
import LazyLoad from 'react-lazy-load';

const LazyLoader = ({
  imgSrc, alt, imgOnLoad, offsetVertical, ...rest
}: Props) => {
  const [loaded, setLoaded] = useState(false);
  const onLoad = () => {
    setLoaded(true);
    if (imgOnLoad) { imgOnLoad(); }
  };
  const className = `${loaded ? 'loaded' : ''}`;

  return (
    <LazyLoad debounce={false} offsetVertical={offsetVertical || 300}>
      <img src={imgSrc} alt={alt} onLoad={onLoad} className={className} {...rest} />
    </LazyLoad>
  );
};

interface Props
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  imgSrc: any;
  alt: string;
  imgOnLoad?: () => void;
  offsetVertical?: number
}

export default LazyLoader;
