https://codesandbox.io/embed/webapps-docs-input-lwh1b0?fontsize=14&hidenavigation=1&module=%2Fsrc%2FDemo.js&theme=dark&view=preview


An `<Input />` is a input element with a state and error message.

## Component Properties

### `state`
**Type:** string - one of `''`, `'saving'`, `'error'` or `'saved'`<br />
**Default:** ''<br />
The state of the field.<br />
`''` is a ready state and will display the default bottom border.<br />
`'saving'` will add an orange bottom border.<br />
`'error'` will add a red bottom border.<br />
`'saved'` will add a green bottom border.
_**Note:** there is no timer function to remove any states, the logic is up to you._

### `error`
**Type:** string<br />
The error message to display when `state` is set to `'error'`.

### `className`
**Type:** string, array or object<br />
Additional classes to apply to the `<Input />`

### Other
All other supplied props will be applied directly to the `<Input />`.
