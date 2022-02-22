https://codesandbox.io/embed/webapps-docs-toasts-o41bpj?fontsize=14&hidenavigation=1&module=%2Fsrc%2FDemo.js&theme=dark&view=preview

## Component Requirements
You must be using the [`<WebApps />` context](/developers/react-components/webapps-context) in order to use Toasts.

## Adding a Toast
You should import the `useToasts` component from `webapps-react`, then extract the `addToast` function.

```jsx
import { useToasts } from 'webapps-react';

const { addToast } = useToasts();
```

A toast is then created with the following function.
```jsx
addToast(title, content, options = {}, callback = () => {});
```

### Title
This is the first line of the notification.

### Content
This is the main body of the notification. This should be a string or valid JSX element.<br />
If no content is provided (`''`), the padding will be adjusted accordingly. See the `Single-Line Toast` demo above.

### Options
A object containing valid options for the notification.

### Callback
Provide a callback function. If no function is provided, the unique ID of the toast will be returned.

## Updating a Toast
Once you have added a toast, you can update the toast using the unique ID of the toast.
```jsx
let toast = addToast('Toast Title', 'Toast Content', { autoDismiss: false });

setTimeout(function () {
    updateToast(toast, {
        title: 'The new Title',
        content: 'The new Content',
        autoDismiss: true,
        autoDismissTimeout: 2000,
    });
}, 3000);
```
The above would add an `info` Toast which will not timeout. After 3 seconds, the Toast would be updated and dismiss after 2 seconds.

## Toast Options
The following options are available to configure your Toast notification.

### `appearance`
A string to choose from the availble appearance styles of the Toast.<br />
Available options include:

- `info` (Default)
- `succcess`
- `warning`
- `error`
- `danger`
- `plain`
- `misc`

If `plain` is selected, no icon shall be displayed.

### `autoDismiss` (Boolean)
Defaults to `true`. This value sets whether or not the Toast should automatically disappear after the `autoDismissTimeout` has elapsed.

### `autoDismissTimeout`
Defaults to `3000` (3 seconds). The milliseconds that should pass before a Toast is automatically dismissed. This value is ignored if `autoDismiss` is `false`.

### `action` (Function)
The action to complete for the main action button. This is used in both the `Single-Action Toast` and the `Multi-Action Toast` as demonstrated above.<br />
If only an `action` is provided, the Toast will be a `Single-Action Toast`. Provide a `secondaryAction` to create a `Multi-Action Toast`.

### `actionLabel`
The string to display for the main action button.

### `secondaryAction` (Function **or** `'dismiss'`)
The action to complete for the secondary action button. This is used in the `Multi-Action Toast` demonstrated above.<br />
If a string of `dismiss` is supplied, the secondary action button can be used to dismiss the Toast.<br />
If only an `action` is provided, the Toast will be a `Single-Action Toast`. Provide a `secondaryAction` to create a `Multi-Action Toast`.

### `secondaryActionLabel`
The string to display for the secondary action button.


### `title` and `content`
These properties should be used if you wish to update the `title` or `content` of a Toast when using the `updateToast` function.