import React, { useEffect } from 'react';


const ReCAPTCHA = React.forwardRef((_props, ref: any) => {
  useEffect(() => {
    // eslint-disable-next-line no-param-reassign
    ref.current = {
      executeAsync: () => Promise.resolve('random-text'),
    };
  }, [ref]);

  return <div>What the fuck is goin on</div>;
});

export default ReCAPTCHA;
