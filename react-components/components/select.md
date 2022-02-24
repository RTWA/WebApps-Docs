# Select

{% embed url="https://codesandbox.io/embed/webapps-docs-select-v2b0ou?fontsize=14&hidenavigation=1&module=%2Fsrc%2FDemo.js&theme=dark&view=preview" %}

An `<Select />` is a select element with a state and error message.

## Component Properties

### `id`

**Type:** string\
**Default:** ''\
The id attribute for the `<select />` element.\
This will also be connected to the `for` attribute on the `<label />` element.

### `name`

**Type:** string\
**Default:** ''\
The name attribute for the `<select />` element.

### `label`

**Type:** string\
**Default:** ''\
The text to display in the `<label />` element.

### `action`

**Type:** object\
Provide an `action` to display on the right-hand side of the `<select />` field, when state is `''`.

### `helpText`

**Type:** string or object\
**Default:** ''\
The optional text to display below the `<select />` element.\
This will be hidden if an `error` property is provided and `state` is set to `error`.

### `state`

**Type:** string - one of `''`, `'saving'`, `'error'` or `'saved'`\
**Default:** ''\
The state of the field.\
`''` is a ready state and will display the default border.\
`'saving'` will add an orange border.\
`'error'` will add a red border.\
`'saved'` will add a green border. \
_**Note:** there is no timer function to remove any states, the logic is up to you._

### `error`

**Type:** string\
The error message to display when `state` is set to `'error'`.

### `wrapperClassName`

**Type:** string, array or object\
**Default:** 'mb-6'\
The classes to apply to the wrapping `<div />` element.

### `labelClassName`

**Type:** string, array or object\
Additional classes to apply to the `<label />` element.

### `selectClassName`

**Type:** string, array or object\
Additional classes to apply to the `<select />` element.

### Other

All other supplied props will be applied directly to the `<select />`.
