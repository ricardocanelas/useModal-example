This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Example

This is a simple example of how you can use multiple modals using only a hook/state.

```js
const { show, close } = useModal('MyUniqueModalID')

return (
  <ModalComponent show={show} onHide={close}>
    Your Content
  <ModalComponent>
)
```

and or...

```js
const { isShow, close } = useModal()

return (
  <ModalComponent show={isShow('MyUniqueModalID')} onHide={() => close('MyUniqueModalID')}>
    Your Content
  <ModalComponent>
)
```

```js
const { state } = useModal();

console.log("All Modals Ids ans Status:", state);
```
