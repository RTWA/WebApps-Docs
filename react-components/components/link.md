https://codesandbox.io/embed/webapps-docs-link-4wn0b9?fontsize=14&hidenavigation=1&module=%2Fsrc%2FDemo.js&theme=dark&view=preview

A `<Link />` is an easy way of navigating.

## Component Properties

### `href` or `to`
If an `href` prop is supplied, the returned element will use an `<a />` tag.<br />
If a `to` prop is supplied, the returned element will be a `<NavLink />`.

### `onClick` 
**Type:** function<br />
An action perform when the `<Link />` is clicked.

### `className` 
**Type:** string, array or object<br />
Classes to apply to the `<Link />`

### `active`
**Type:** boolean<br />
This currently has no effect.

### `disabled`
**Type:** boolean<br />
This currently has no effect.

### Other
All other supplied props will be applied directly to the `<Link />`
