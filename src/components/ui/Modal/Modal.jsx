import './Modal.css'
import { useState } from "react";
import { ModalContext, useModal } from './useModal';

const Modal = ({ children }) => {
  const [ openModal, setOpenModal ] = useState(false);
  const toggleModal = () => setOpenModal(open => !open);

  const value = {
    openModal,
    toggleModal
  }

  return (
    <ModalContext.Provider value={value}>
      <div style={{zIndex: 1}}>
        { children }
      </div>
    </ModalContext.Provider>
  );
};

const ModalTrigger = ({
  children
}) => {
  const { toggleModal } = useModal();
  return(
    <div onClick={toggleModal}>
      { children }
    </div>
  )
}

const ModalHeader = ({
  children
}) => {
  return(
    <div className='modal-header'>
      { children }
    </div>
  )
}

const ModalBody = ({
  children
}) => {
  return(
    <div className='modal-body'>
      { children }
    </div>
  )
}

const ModalFooter = ({
  children
}) => {
  return(
    <div className='modal-footer'>
      { children }
    </div>
  )
}

const ModalContainer = ({
  children
}) => {
  const { openModal } = useModal();
  
  return (
    <div className={`modal-background ${openModal ? 'visible' : 'invisible'}`}>
      <div className='modal-container'>
        {children}
      </div>
    </div>
  );
}

export {
  Modal,
  ModalTrigger,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter
};
