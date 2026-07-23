Modal for confirmations, forms, and focused decisions. Blurred overlay, click-outside or × to close.

```jsx
<Dialog open={open} title="Delete project?" onClose={close} footer={<><Button variant="secondary" onClick={close}>Cancel</Button><Button variant="danger">Delete</Button></>}>
  This can't be undone.
</Dialog>
```
