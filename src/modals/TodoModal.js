import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ConfirmDialog from "../modals/ConfirmDialog";
import { useModal } from "../hooks/useModal";
import { useDialog } from "../hooks/useDialog";

const BodyContent = () => {
  const { close } = useModal("ToDo");
  const { dialog } = useDialog();

  const openDialog = async () => {
    const confirm = await dialog(ConfirmDialog, { title: "Another title" });
    console.log("[modal][confirmed]", confirm);

    if (confirm) close();
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
