# Infinite Scroll

{% embed url="https://codesandbox.io/embed/webapps-docs-infinitescroll-t8x6tb?fontsize=14&hidenavigation=1&module=%2Fsrc%2FDemo.js&theme=dark&view=preview" %}

A `<InifiniteScroll />` is a loading wrapper for list of items that will perform a `loadMore` action when the bottom of the list is reached.

## Component Properties

### `loadMore`

**Type:** function\
The action to perform when the bottom of the list is reached

### `hasMore`

**Type:** boolean\
True if there are more items to load, false if not. `loadMore` function will not be called if `hasMore` is false.
