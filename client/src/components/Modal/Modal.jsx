import React from 'react';
import { useGlobalContext } from '../../context/Context';

const Modal = () => {
  function findComment(percentage) {
    if (percentage >= 50) {
      return `Excellent`;
    } else {
      return `Great effort`;
    }
  }
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className="modal-content">
        <h2>{findComment(((correct / questions.length) * 100).toFixed(0))}</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}%
          questions correctly
        </p>

        <button
          className="btn btn-success close-btn"
          style={{ width: '50%' }}
          onClick={closeModal}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;
