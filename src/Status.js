import React from "react";
import useModal from "./hooks/useModal";

const Status = () => {
  const { isShowing } = useModal();

  return (
    <div>
      {isShowing("the-basic-modal")
        ? "showing the-basic-modal"
        : "not showing the-basic-modal"}
      <br />
      {isShowing("the-advanced-modal")
        ? "showing the-advanced-modal"
        : "not showing the-advanced-modal"}
      <hr />
    </div>
  );
};

export default Status;
