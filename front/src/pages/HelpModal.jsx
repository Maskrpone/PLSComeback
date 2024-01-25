import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./HelpModal.css";
import GPT from "./GPT";


const HelpModal = ({ isOpen, onClose }) => {
  const modalContent = (
    <div className="help-modal">
      <h1 className="Titre-modul">Chat with Mr Hammer</h1>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <GPT/>
      </div>
    </div>
  );

  return isOpen
    ? ReactDOM.createPortal(modalContent, document.body)
    : null;
};

export default HelpModal;