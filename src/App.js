import React from "react";
import { ModalProvider, useModal } from "./hooks/useModal";
import { DialogProvider, useDialog } from "./hooks/useDialog";
import ToDoModal from "./modals/TodoModal";
import ConfirmDialog from "./modals/ConfirmDialog";

const List = () => {
  const { isShow, open } = useModal();
  const { dialog } = useDialog();

  const handleConfirm = async () => {
    const confirm = await dialog(ConfirmDialog, {
      title: "Do you want close without save?",
    });
    console.log("[app][confirmed]", confirm);
  };

  return (
    <div>
      {isShow("ToDo") ? "showing toDo" : "not showing toDo"} <br />
      {isShow("ConfirmDialog")
        ? "showing ConfirmDialog"
        : "not showing ConfirmDialog"}
      <hr />
      <button onClick={() => open("ToDo")} className="mr-3">
        Open To Do Modal
      </button>
      <button onClick={handleConfirm}>Open ConfirmDialog</button>
      <ToDoModal />
    </div>
  );
};

// --- APP ---

function App() {
  return (
    <DialogProvider>
      <ModalProvider>
        <List />
      </ModalProvider>
    </DialogProvider>
  );
}

export default App;
