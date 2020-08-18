import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import { useModal } from "../hooks/useModal";

const ConfirmDialog = ({ resolve, dialogId, title }) => {
  // you can use 'resolveDialog', if you want.
  // const { resolveDialog } = useModal(dialogId);

  const handleNo = () => {
    resolve(false);
    // resolveDialog(false)
  };

  const handleYes = () => {
    resolve(true);
    // resolveDialog(true)
  };

  return (
    <Modal show={true} onHide={handleNo}>
      <Modal.Header closeButton>
        <Modal.Title>{title || "Modal title"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here. [{dialogId}]</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleNo}>
          No
        </Button>
        <Button variant="primary" onClick={handleYes}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDialog;

// If you want use Portal...
// import ReactDOM from "react-dom";
// export default (props) =>
//   ReactDOM.createPortal(
//     <ConfirmDialog {...props} />,
//     document.getElementById("portal")
//   );
