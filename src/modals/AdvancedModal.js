import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ConfirmDialog from "../modals/ConfirmDialog";
import useModal from "../hooks/useModal";
import useDialog from "../hooks/useDialog";

const BodyContent = () => {
  const { close: closeAdvancedModal } = useModal("the-advanced-modal");
  const { open: openBasicModal } = useModal("the-basic-modal");
  const { dialog } = useDialog();

  const openDialog = async () => {
    const confirm = await dialog(ConfirmDialog, {
      title: "Do you want close the advanced modal?",
    });
    console.log("[modal][confirmed]", confirm);

    if (confirm) closeAdvancedModal();
  };

  return (
    <div>
      <p>This is the content of the modal.</p>
      <p>Woohoo, you're reading this text in a modal!</p>
      <Button className="mr-3" onClick={closeAdvancedModal}>
        Close this modal
      </Button>
      <Button className="mr-3" onClick={openBasicModal}>
        Open BasicModal
      </Button>
      <Button onClick={openDialog}>Open ConfirmDialog</Button>
    </div>
  );
};

const AdvanceModal = () => {
  const { show, close } = useModal("the-advanced-modal");

  const handleClose = () => {
    close();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
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

export default AdvanceModal;
