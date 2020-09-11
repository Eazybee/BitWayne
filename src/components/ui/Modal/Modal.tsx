import React, { useEffect, FC } from 'react';
import ReactDOM from 'react-dom';

const el = document.createElement('div');
el.classList.add('modal-root');

const Modal: FC<Props> = (props: Props) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
     modalRoot?.appendChild(el);

     return () => { modalRoot?.removeChild(el); };
  }, [modalRoot]);


  return ReactDOM.createPortal(
    props.children,
    el,
  );
};

type Props = {
  children?: React.ReactNode;
};

export default Modal;
