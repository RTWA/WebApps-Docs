# Confirm Delete Modal

{% embed url="https://codesandbox.io/embed/webapps-docs-confirmdeletemodal-z2gpqo?fontsize=14&hidenavigation=1&module=%2Fsrc%2FDemo.js&theme=dark&view=preview" %}

A `<ConfirmDeleteModal />` is a confirmation modal that requires the user to the action they wish to perform.

## Component Properties

### `title`

**Type:** string\
**Default:** 'Are you sure?'\
The title text to display.

### `message`

**Type:** string\
**Default:** "Are you sure you wish to delete this item?\nThis action cannot be undone"\
The message to display in the modal.

### `cancelText`

**Type:** string\
**Default:** 'No'\
The text to display on the cancel button.

### `confirmText`

**Type:** string\
**Default:** 'Yes'\
The text to display on the confirmation button.

### `onConfirm`

**Type:** function\
What to do when the confirmation button is clicked.

### `onCancel`

**Type:** function\
What to do when the cancel button is clicked.

### Other

All other supplied props will be applied to the backdrop element.
