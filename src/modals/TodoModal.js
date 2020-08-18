import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useModal } from "../hooks/useModal";
import ConfirmDialog from "../modals/ConfirmDialog";

const BodyContent = () => {
  const { close, dialog } = useModal("ToDo");

  const openDialog = async () => {
    const confirm = await dialog(ConfirmDialog);
    console.log("CONFIRMED", confirm);
  };

  return (
    <div>
      <p>This is the content of the modal.</p>
      <p>Woohoo, you're reading this text in a modal!</p>
      <Button onClick={close} className="mr-3">
        Close this modal
      </Button>
      <Button onClick={openDialog}>Open ConfirmModal</Button>
    </div>
  );
};

const ToDoModal = () => {
  const { show, close } = useModal("ToDo");

  const handleClose = () => {
    close();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Woohoo, you're reading this text in a modal!</p>
        <BodyContent />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ToDoModal;
