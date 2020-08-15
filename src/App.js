import React from "react";
import { ModalProvider, useModal } from "./hooks/useModal";
import ToDoModal from "./modals/TodoModal";
import ConfirmDialog from "./modals/ConfirmDialog";

const List = () => {
  const { isShow, open } = useModal();

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
      <button onClick={() => open("ConfirmDialog")}>Open ConfirmDialog</button>
      <ToDoModal />
      <ConfirmDialog />
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
