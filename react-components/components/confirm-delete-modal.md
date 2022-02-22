https://codesandbox.io/embed/webapps-docs-confirmdeletemodal-z2gpqo?fontsize=14&hidenavigation=1&module=%2Fsrc%2FDemo.js&theme=dark&view=preview

A `<ConfirmDeleteModal />` is a confirmation modal that requires the user to the action they wish to perform.

## Component Properties

### `title`
**Type:** string<br />
**Default:** 'Are you sure?'<br />
The title text to display.

### `message`
**Type:** string<br />
**Default:** "Are you sure you wish to delete this item?\nThis action cannot be undone"<br />
The message to display in the modal.

### `cancelText`
**Type:** string<br />
**Default:** 'No'<br />
The text to display on the cancel button.

### `confirmText` 
**Type:** string<br />
**Default:** 'Yes'<br />
The text to display on the confirmation button.

### `onConfirm` 
**Type:** function<br />
What to do when the confirmation button is clicked.

### `onCancel` 
**Type:** function<br />
What to do when the cancel button is clicked.


### Other
All other supplied props will be applied to the backdrop element.