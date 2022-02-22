https://codesandbox.io/embed/webapps-docs-banner-lhxk5u?fontsize=14&hidenavigation=1&module=%2Fsrc%2FDemo.js&theme=dark&view=preview


## Component Properties

### `tag`
**Type:** string<br />
**Default:** 'div'<br />
The HTML tag that the Banner will use.

### `color` 
**Type:** string<br />
The color class that will be applied to the banner.<br />
_**Note:** this string is currently applied directly in the class with `bg-` prepended to the value. You must supply the color shade value. E.G `red-300`._

### `darkColor` 
**Type:** string<br />
The dark color class that will be applied to the banner.<br />
_**Note:** this string is currently applied directly in the class with `dark:bg-` prepended to the value. You must supply the color shade value. E.G `red-600`._

### `className` 
**Type:** string, array or object<br />
Additonal classes to apply to the Banner element.