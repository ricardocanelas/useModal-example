import React, { createContext, useState } from "react";

const ModalContext = createContext();

function DialogProvider(props) {
  const [state, setState] = useState({ portals: [] });

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
    <ModalContext.Provider value={{ ...state, dialog, resolveDialog }}>
      {state.portals.map((p) => p.Comp)}
      {props.children}
    </ModalContext.Provider>
  );
}

function useDialog(dialogId) {
  const context = React.useContext(ModalContext);

  if (context === undefined) {
    throw new Error(`useDialog must be used within a DialogProvider`);
  }

  return {
    dialog: context.dialog,
    resolve: (value, id = dialogId) => {
      const isEvent = typeof id === "object" && id.hasOwnProperty("type");
      const hasId = isEvent ? dialogId : id;
      if (!hasId)
        throw new Error(
          `useDialog must have a value if you want to use the resolve method`
        );

      return context.resolveDialog(isEvent ? dialogId : id)(value);
    },
    state: context,
  };
}

export { DialogProvider, useDialog };
