---
title: "Including Scripts"
---

Create a `_scripts.js` file in the `includes` directory of your Plugin and ensure you have included it in your [Scripts Function](class-file#the-scripts-function).

The contents of this file will be injected into the `<body />` tag of the page displaying a Block that uses your Plugin. 

**Note:** only "vanilla" JavaScript should be used. jQuery is not available and your code should not include or attempt to inject the library.