# Badge

{% embed url="https://codesandbox.io/embed/webapps-docs-badge-86bivy?fontsize=14&hidenavigation=1&module=%2Fsrc%2FDemo.js&theme=dark&view=preview" %}

The `<Badge />` comes in two variants, a Standard Badge and a Pill Badge.

## Component Properties

### `tag`

**Type:** string\
**Default:** 'span'\
The HTML tag that the Badge will use.

### `pill`

**Type:** boolean\
If this is true the Pill Badge variant will be output.

### `color`

**Type:** string\
The color class that will be applied to the badge.\
_**Note:** this string is currently applied directly in the class with `bg-` prepended to the value. You must supply the color shade value. E.G `red-300`._

### `className`

**Type:** string, array or object\
Additonal classes to apply to the Badge element.
