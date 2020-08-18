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

  const resolveDialog = (id, resolve = null) => {
    const dialog = state.portals.find((p) => p.id === id);

    return (value) => {
      setState((prev) => ({
        ...prev,
        portals: [...prev.portals.filter((p) => p.id !== id)],
      }));

      return resolve ? resolve(value) : dialog ? dialog.resolve(value) : null;
    };
  };

  const dialog = async (Component, props, id = null) => {
    const name = Component.displayName || Component.name || "";
    const dialogId = name + (id || Math.random().toString(36).substr(2));

    return new Promise((resolve) => {
      const handleResolve = resolveDialog(dialogId, resolve);

      setState((prev) => ({
        ...prev,
        portals: [
          {
            id: dialogId,
            Comp: (
              <Component
                {...props}
                key={dialogId}
                resolve={handleResolve}
                dialogId={dialogId}
              />
            ),
            resolve,
          },
        ],
      }));
    });
  };

  return (
    <ModalContext.Provider
      value={{ ...state, open, close, dialog, resolveDialog }}
    >
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
    dialog: context.dialog,
    resolveDialog: (value, id = modalId) => {
      const isEvent = typeof id === "object" && id.hasOwnProperty("type");
      return context.resolveDialog(isEvent ? modalId : id)(value);
    },
    state: context,
  };
}

export { ModalProvider, useModal };
