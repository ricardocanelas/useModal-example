This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a simple example of how you can use multiple modals/dialogs using only hook/contextApi.

See the examples here - https://ricardocanelas.github.io/useModal-example

## Installing

In `index.js` add the providers

```js
import React from "react";
import ReactDOM from "react-dom";
import { ModalProvider } from "./hooks/useModal";
import { DialogProvider } from "./hooks/useDialog";

ReactDOM.render(
  <DialogProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </DialogProvider>,
  document.getElementById("root")
);
```

## UseModal

| props     | type     |
| --------- | -------- |
| show      | boolean  |
| open      | function |
| close     | function |
| isShowing | function |

### Creating the component:

```js
const MyModal = () => {
  const { show, close } = useModal("MyUniqueModalID");

  return (
    <YourModalComponent show={show} onHide={close}>
      Your Content
    </YourModalComponent>
  );
};
```

### Using:

```js
import useModal from "./hooks/useModal";

const HomePage = () => {
  const { open } = useModal("MyUniqueModalID");

  return (
    <>
      <MyModal />
      <button click={open}>Open Modal</div>
      <button click={() => open("MyUniqueModalID")}>Open Modal with Id</div>
    </>
  );
};
```

## UseDialog

| props  | type           |
| ------ | -------------- |
| dialog | async function |

### Creating the component:

```js
const ConfirmDialog = ({ resolve, dialogId, title }) => {
  const handleYes = () => resolve(true);
  const handleNo = () => resolve(false);
  const handleHide = () => resolve(null);

  return (
    <YourModalComponent show={true} onHide={handleHide}>
      <button onClick={handleYes}>Yes</button>
      <button onClick={handleNo}>No</button>
    </YourModalComponent>
  );
};
```

### Using:

```js
import useDialog from "./hooks/useDialog";
import ConfirmDialog from "./modals/ConfirmDialog";

const HomePage = () => {
  const { dialog } = useDialog();

  const handleConfirm = async () => {
    const confirm = await dialog(ConfirmDialog, {
      title: "Do you want close without save?",
    });

    if (confirm) {
      // do something
    }
  };

  return <button onClick={handleConfirm}>Quit</button>;
};
```
