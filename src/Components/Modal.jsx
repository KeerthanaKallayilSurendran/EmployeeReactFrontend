// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    

  return (
    <>
      {/* Modal Background Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Container */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &#10005;
            </button>

            {/* Modal Content */}
            <div className="mt-4">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
