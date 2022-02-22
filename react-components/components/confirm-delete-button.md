https://codesandbox.io/embed/webapps-docs-confirmdeletebutton-4yldzr?fontsize=14&hidenavigation=1&module=%2Fsrc%2FDemo.js&theme=dark&view=preview

A `<ConfirmDeleteButton />` is a button that requires the user to click twice, within a configurable time period, to perform the click action.

## Component Properties

### `text`
**Type:** string<br />
**Default:** "Delete"<br />
The text to initially display on the button.

### `confirmText`
**Type:** string<br />
**Default:** "Delete - Are you sure?"<br />
The text to display on the button after it has been clicked once.

### `timeout`
**Type:** int<br />
**Default:** 2000<br />
The milliseconds to elapse before the first click times out.

### `initialColor` 
**Type:** string<br />
**Default:** 'red'<br />
The initial color class that will be applied to the button.<br />
_**Note:** this string is currently applied directly in the class with `bg-` prepended to the value and a shade value is appended.<br />
You must supply **only** the color value. E.G `red`._

### `confirmColor` 
**Type:** string<br />
**Default:** 'orange'<br />
The confirmation color class that will be applied to the button.<br />
_**Note:** this string is currently applied directly in the class with `bg-` prepended to the value and a shade value is appended.<br />
You must supply **only** the color value. E.G `red`._


### Other
All other supplied props will be applied directly to the `<ConfirmDeleteButton />`. This Component uses a [`<Button />`](button) so `square`, `rounded`, `size` and `style` props are all valid.
