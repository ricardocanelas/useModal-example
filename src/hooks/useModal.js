import React, { createContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider(props) {
  const [state, setState] = useState({ BlaModal: { show: false } });

  const open = (id) => {
    setState((prev) => ({ ...prev, [id]: { show: true } }));
  };

  const close = (id) => {
    setState((prev) => ({ ...prev, [id]: { show: false } }));
  };

  return (
    <ModalContext.Provider value={{ ...state, open, close }}>
      {props.children}
    </ModalContext.Provider>
  );
}

function useModal(modalId) {
  const context = React.useContext(ModalContext);

  if (context === undefined) {
    throw new Error(`useModal must be used within a ModalProvider`);
  }

  return {
    show: context.hasOwnProperty(modalId) ? context[modalId].show : false,
    isShow: (id = modalId) =>
      context.hasOwnProperty(id) ? context[id].show : false,
    open: (id = modalId) => {
      const isEvent = typeof id === "object" && id.hasOwnProperty("type");
      context.open(isEvent ? modalId : id);
    },
    close: (id = modalId) => {
      const isEvent = typeof id === "object" && id.hasOwnProperty("type");
      context.close(isEvent ? modalId : id);
    },
  };
}

export { ModalProvider, useModal };
