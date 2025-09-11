function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
          {children}
          <button
            onClick={onClose}
            className="mt-4 rounded-md bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300"
          >
            Fechar
          </button>
        </div>
      </div>
    );
  }
  
  export default Modal;
  