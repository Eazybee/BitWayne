/* eslint-disable no-nested-ternary */


const getScroll = () => {
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

  return scroll;
};

export default getScroll;
