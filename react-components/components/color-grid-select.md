# Color Grid Select

A `<ColorGridSelect />` is a grid of coloured options for user to select from.

## Component Properties

### `id`

**Type:** string\
**Default:** ''\
This be connected to the `for` attribute on the `<label />` element.

### `label`

**Type:** string\
**Default:** ''\
The text to display in the `<label />` element.

### `colors`

**Type:** array\
An array of color objects to display. Each color object must have the following properties.

**value** - The value to be passed to the `onSelect` function.\
**bgClasses** - The classes to apply to the coloured area of the colour option.\
**name** - The display name of the colour option.\
**selected** - Boolean value to represent whether or not this colour option is selected.

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
