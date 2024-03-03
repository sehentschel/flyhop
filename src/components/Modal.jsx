
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

const UploadModal = ({ onClose }) => {


  return (
    <div
      className="overlay modal show fade" 
      tabIndex='-1'
      style={{ display: 'block', position: 'initial'}}
    >
      <Modal.Dialog>
        <Modal.Header class='border-0'>
          <Button type='button' className='closeButton' onClick={onClose}>X</Button>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body class='border-0'>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer class='border-0'>
          
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default UploadModal;