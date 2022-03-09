# Grid Select

{% embed url="https://codesandbox.io/embed/webapps-docs-gridselect-qc52sy?fontsize=14&hidenavigation=1&module=%2Fsrc%2FDemo.js&theme=dark&view=preview" %}

A `<GridSelect />` is a grid of object options for user to select from.

## Component Properties

### `id`

**Type:** string\
**Default:** ''\
This be connected to the `for` attribute on the `<label />` element.

### `label`

**Type:** string\
**Default:** ''\
The text to display in the `<label />` element.

### `options`

**Type:** array\
An array of objects to display. Each object must have the following properties.

**value** - The value to be passed to the `onSelect` function.\
**object** - (type: Object) The object to display in the selection box.\
**selected** - Boolean value to represent whether or not this option is selected.

### `helpText`

**Type:** string or object\
**Default:** ''\
The optional text to display below the `<input[type"checkbox"] />` element.\
This will be hidden if an `error` property is provided and `state` is set to `error`.

### `onSelect`

**Type:** function\
The function to perform when an the option is selected.

### `wrapperClassName`

**Type:** string, array or object\
**Default:** 'mb-6'\
The classes to apply to the wrapping `<div />` element.

### `labelClassName`

**Type:** string, array or object\
Additional classes to apply to the `<label />` element.
