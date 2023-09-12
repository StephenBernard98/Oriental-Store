import React from "react";

const Modal = ({ children, handleClick, closeModal }) => {
  return (
    <div>
      <div
        onClick={handleClick}
        className="w-full h-screen fixed top-0 left-0 z-10 bg-black/60 flex justify-center items-center"
      >
        <div
          onClick={closeModal}
          className="w-[600px] max-w-[90%] sm:max-w-[650px] bg-black shadow-lg shadow-gray-600 rounded-xl z-20 border-4  border-yellow-500 "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
