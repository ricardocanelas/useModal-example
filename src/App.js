import React from "react";
import useModal from "./hooks/useModal";
import useDialog from "./hooks/useDialog";
import Status from "./Status";
import BasicModal from "./modals/BasicModal";
import AdvancedModal from "./modals/AdvancedModal";
import ConfirmDialog from "./modals/ConfirmDialog";

const App = () => {
  const { open } = useModal();
  const { dialog } = useDialog();

  const handleConfirm = async () => {
    const confirm = await dialog(ConfirmDialog, {
      title: "Do you want close without save?",
    });
    console.log("[app][confirmed]", confirm);
  };

  return (
    <div>
      <Status />

      <button onClick={() => open("the-basic-modal")} className="mr-3">
        Open Basic
      </button>
      <button onClick={() => open("the-advanced-modal")} className="mr-3">
        Open Advanced
      </button>
      <button onClick={handleConfirm}>Open ConfirmDialog</button>

      {/* ADD THE MODALS HERE */}
      <BasicModal modalId="the-basic-modal" />
      <AdvancedModal />
    </div>
  );
};

export default App;
