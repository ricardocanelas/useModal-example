import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ConfirmDialog = ({ resolve, dialogId, props }) => {
  const { title } = props;

  const handleNo = () => {
    resolve(false);
  };

  const handleYes = () => {
    resolve(true);
  };

  return (
    <Modal show={true} onHide={handleNo}>
      <Modal.Header closeButton>
        <Modal.Title>{title || "Modal title"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          Modal body text goes here. <br />
          DialogId = {dialogId}
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={handleNo}>
          No
        </Button>
        <Button variant="primary" onClick={handleYes}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ConfirmDialog.displayName = "MyConfirmDialogName";

export default ConfirmDialog;

// If you want use Portal, you can...
// import ReactDOM from "react-dom";
// export default (props) =>
//   ReactDOM.createPortal(
//     <ConfirmDialog {...props} />,
//     document.getElementById("portal")
//   );
