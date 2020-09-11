import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import useModal from "../hooks/useModal";

const BasicModal = ({ modalId }) => {
  const { show, close } = useModal(modalId);

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Simple Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Woohoo, you're reading this text in a modal!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BasicModal;
