import React, { useState } from 'react';
import './modal.css'
import ModalDialog from './ModalDialog';

const CustomModal: React.FC<object> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModal = (): void => {
    setShowModal(!showModal);
  };

  const handleModalClose = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleModal}>Modal</button> 
      {showModal && (
        <ModalDialog 
          id={"modal-id"}
          modalHeader={
            <h2>Modal Header</h2>
          }
          modalBody={
            <p>Modal Body Content </p>
          }
          modalFooter={
            <div className='modal-footer'>Modal Footer</div>
          }
          onClick={handleModalClose}
        />
      )}
    </>
  )
}

export default CustomModal;