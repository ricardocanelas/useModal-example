import React from "react";
import ReactDOM from "react-dom";
import { ModalProvider } from "./hooks/useModal";
import { DialogProvider } from "./hooks/useDialog";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <DialogProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </DialogProvider>,
  document.getElementById("root")
);
