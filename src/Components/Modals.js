import React from "react";
import Modal from "react-modal";
import SignUp from "./Signup";
import Login from "./Login";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
  },
};

export default function Modals({
  isLogInTrue,
  setIsLogInTrue,
  closeModal,
  modalIsOpen,
}) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        // contentLabel="Example Modal"
      >
        {isLogInTrue == "Login" ? (
          <Login setIsLogInTrue={setIsLogInTrue} closeModal={closeModal} />
        ) : (
          <SignUp setIsLogInTrue={setIsLogInTrue} closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}
