import React from "react";
import { FaTimes } from "react-icons/fa";

import "./Modal.css";

function Modal({ show, close, children }) {
  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <FaTimes className="close" onClick={close} />
        {children}
      </div>
    </div>
  );
}

export default Modal;
