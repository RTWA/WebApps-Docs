---
title: Undocumented Components
---

A small number of Components are left undocumented as they are core WebApps components and the likelyhood of them being required anywhere else is low.

### `<Scrollbar />`
A [perfect-scrollbar](https://github.com/mdbootstrap/perfect-scrollbar) wrapper used within the sidebar navigation.

### `<Sidebar />`
The WebApps sidebar navigation created from a `navigation` prop.

### `<SidebarWrapper />`
The WebApps sidebar wrapper, this contains the WebApps logo and handles error logic.

### `<NavigationError />`
A React error boundary to catch when the navigation fails to load correctly. Designed to be displayed in `<SidebarWrapper />`

### `<AppError />`
A React error boundary to catch errors within the main routes.
