import Modal from "react-modal";

const defaultStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

interface ModalProps {
  visible: boolean;
  closeModal: () => void;
  customStyles?: any;
  children: any;
}

const CustomModal = ({
  visible,
  closeModal,
  customStyles = defaultStyles,
  children,
}: ModalProps) => {
  return (
    <Modal
      isOpen={visible}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
