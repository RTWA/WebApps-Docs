# Switch

{% embed url="https://codesandbox.io/embed/webapps-docs-switch-xu3uly?fontsize=14&hidenavigation=1&module=%2Fsrc%2FDemo.js&theme=dark&view=preview" %}

A `<Switch />` is a checkbox input with a sliding switch style UX.

## Component Properties

### `state`

**Type:** string - one of `''`, `'saving'`, `'error'` or `'saved'`\
**Default:** ''\
The state of the field.\
`''` is a ready state and will display the default bottom border.\
`'saving'` will add an orange bottom border.\
`'error'` will add a red bottom border.\
`'saved'` will add a green bottom border. _**Note:** there is no timer function to remove any states, the logic is up to you._

### `error`

**Type:** string\
The error message to display when `state` is set to `'error'`.

### `className`

**Type:** string, array or object\
Additional classes to apply to the `<Switch />`

### `name`

**Type:** string\
**Default:** `'check'`\
The name and id attribute to apply to the `input[type"checkbox"]`

### Other

All other supplied props will be applied to the `input[type"checkbox"]`
