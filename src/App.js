import React from "react";
import { ModalProvider, useModal } from "./hooks/useModal";
import ToDoModal from "./modals/TodoModal";
import ConfirmDialog from "./modals/ConfirmDialog";

const List = () => {
  const { isShow, open, dialog } = useModal();

  const handleConfirm = async () => {
    const confirm = await dialog(ConfirmDialog, {
      title: "Do you want close without save?",
    });
    console.log("confirm", confirm);
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
    <ModalProvider>
      <List />
    </ModalProvider>
  );
}

export default App;
