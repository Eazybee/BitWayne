import React, { useEffect, FC } from 'react';
import ReactDOM from 'react-dom';


const Modal: FC<Props> = (props: Props) => {
  const el = document.createElement('div');
  el.classList.add('modal-root');

  useEffect(() => {
    const body = document.querySelector('body');
     body?.appendChild(el);

     return () => { body?.removeChild(el); };
  }, [el]);


  return ReactDOM.createPortal(
    props.children,
    el,
  );
};

type Props = {
  children?: React.ReactNode;
};

export default Modal;
