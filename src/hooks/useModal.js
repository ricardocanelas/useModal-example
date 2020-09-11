import React, { createContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider(props) {
  const [state, setState] = useState({ portals: [] });

  const open = (id) => {
    setState((prev) => ({ ...prev, [id]: { show: true } }));
  };

  const close = (id) => {
    setState((prev) => ({ ...prev, [id]: { show: false } }));
  };

  return (
    <ModalContext.Provider value={{ ...state, open, close }}>
      {state.portals.map((p) => p.Comp)}
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
    isShowing: (id = modalId) =>
      context.hasOwnProperty(id) ? context[id].show : false,
    open: (id = modalId) => {
      const isEvent = typeof id === "object" && id.hasOwnProperty("type");
      context.open(isEvent ? modalId : id);
    },
    close: (id = modalId) => {
      const isEvent = typeof id === "object" && id.hasOwnProperty("type");
      context.close(isEvent ? modalId : id);
    },
    state: context,
  };
}

export { ModalProvider };
export default useModal;
