import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>This is a modal! You can put any content here.</p>
      </div>
    </div>
  );
};

export default Modal;