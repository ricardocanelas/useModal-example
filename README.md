This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a simple example of how you can use multiple modals/dialogs using only a hook/contextApi.

## UseModal

Creating the component:

```js
const MyModal = () => {
  const { show, close } = useModal('MyUniqueModalID')

  return (
    <ModalComponent show={show} onHide={close}>
      Your Content
    <ModalComponent>
  )
}
```

or you can use ID value, but I don't recommend

```js
const MyModal = () => {
  const { isShow, close } = useModal()

  return (
    <ModalComponent
      show={isShow('MyUniqueModalID')}
      onHide={() => close('MyUniqueModalID')}>
      Your Content
    <ModalComponent>
  )
}
```

Using:

```js
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

Creating the component:

```js
const ConfirmDialog = ({ resolve, dialogId, title }) => {
  const handleYes = () => resolve(true);
  const handleNo = () => resolve(false);
  // ...your modal
};
```

Using:

```js
import { DialogProvider, useDialog } from "./hooks/useDialog";
import ConfirmDialog from "./modals/ConfirmDialog";

const handleConfirm = async () => {
  const confirm = await dialog(ConfirmDialog, {
    title: "Do you want close without save?",
  });

  if (confirm) {
    // do something
  }
};
```
