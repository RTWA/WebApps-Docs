https://codesandbox.io/embed/inspiring-hypatia-6rkqgv?fontsize=14&hidenavigation=1&module=%2Fsrc%2FDemo.js&theme=dark&view=preview

`<Button />`'s are available in 4 different styles, each is displayed in the preview above. `<Button />`'s also come in 3 different sizes.

## Component Properties

### `color` 
**Type:** string<br />
The color class that will be applied to the banner.<br />
_**Note:** this string is currently applied directly in the class with `bg-` prepended to the value and a shade value is appended.<br />
You must supply **only** the color value. E.G `red`._

### `style` 
**Type:** string - one of "full", "outline", "ghost" or "link"<br />
**Default:** "full"<br />
The style of the Button you require.

### `size`
**Type:** string - one of "", "small", "large"<br />
**Default:** ""<br />
The size of the Button you require.

### `rounded`
**Type:** boolean<br />
Is the Button the rounded variant

### `square`
**Type:** boolean<br />
Is the Button the square variant

### Links
If an `href` prop is supplied, the returned button will use an `<a />` tag.<br />
If a `to` prop is supplied, the returned button will be a `<NavLink />`.

### Other
All other supplied props will be applied directly to the `<Button />`
