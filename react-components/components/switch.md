# Switch

{% embed url="https://codesandbox.io/embed/webapps-docs-switch-xu3uly?fontsize=14&hidenavigation=1&module=%2Fsrc%2FDemo.js&theme=dark&view=preview" %}

A `<Switch />` is a checkbox input with a sliding switch style UX.

## Component Properties

### `id`

**Type:** string\
**Default:** ''\
The id attribute for the `<input[type"checkbox"] />` element.\
This will also be connected to the `for` attribute on the `<label />` element.

### `name`

**Type:** string
**Default:** ''\
The name attribute for the `<input[type"checkbox"] />` element.

### `label`

**Type:** string
**Default:** ''\
The text to display in the `<label />` element.

### `helpText`

**Type:** string
**Default:** ''\
The optional text to display below the `<input[type"checkbox"] />` element.\
This will be hidden if an `error` property is provided and `state` is set to `error`.

### `state`

**Type:** string - one of `''`, `'saving'`, `'error'` or `'saved'`\
**Default:** ''\
The state of the field.\
`''` is a ready state and will display the default bottom border.\
`'saving'` will add an orange bottom border.\
`'error'` will add a red bottom border.\
`'saved'` will add a green bottom border.\
 _**Note:** there is no timer function to remove any states, the logic is up to you._

### `error`

**Type:** string\
The error message to display when `state` is set to `'error'`.

### `checked`

**Type:** boolean\
Whether or not the `<input[type"checkbox"] />` element should be checked.

### `disabled`

**Type:** boolean\
Whether or not the `<input[type"checkbox"] />` element should be disabled.

### `onChange`

**Type:** function\
The function to perform when the `<input[type"checkbox"] />` element is changed.

### `className`

**Type:** string, array or object\
**Default:** 'w-full'\
Additional classes to apply to the wrapping `<div />` element.
