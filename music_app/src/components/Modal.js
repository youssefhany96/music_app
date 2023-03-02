import React from "react";

function Modal({ show, close, children }) {
  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <i className="fas fa-times" onClick={close} />
        {children}
      </div>
    </div>
  );
}

export default Modal;
