import React from 'react';
import ReactDOM from 'react-dom';
import useWindowSize from '../../../hooks/use-windowSize';

import './Modal.css';

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const customPadding = 30;

const ModalOverlay = (props) => {
  const windowSize = useWindowSize();
  let customSize = {};
  if (props.height && props.width) {
    customSize.width = windowSize.width > 500 ? props.width : windowSize.width * 0.9;
    customSize.height = props.height;
    customSize.padding = `${customPadding}px`;
    customSize.left = `calc(50% - ${customSize.width / 2}px)`;
    customSize.top = `calc(50% - ${customSize.height / 2}px)`;
    customSize.width = `${customSize.width}px`;
    customSize.height = `${customSize.height}px`;
  }

  const modalStyles = {
    ...customSize,
    ...props.style
  }

  return (
    <div className={`modal ${props.className ? props.className : ''}`} style={modalStyles}>
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          {...props}
        >
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
