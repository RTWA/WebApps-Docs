# Introduction

WebApps provides an NPM package containing React Components that you can use either in WebApps itself, or with your own App.

### Installation

The NPM package is already installed to WebApps, but to install into your App run the following command in your **App's** root directory.

```
npm install --save-dev webapps-react
```

### Importing

All Components can be imported into your App using the following command.

```jsx
import { Button } from 'webapps-react';
```

_Replace `Button` with the Component you require._

### HOCs

Two React Context Provider Higher Order Components are available, the [Auth Context](auth-context/) for getting the Authenticated User and the [WebApps Context](webapps-context/) for getting all other WebApps Context elements.\
These import the same way as other Components.

```jsx
import { withAuth, withWebApps } from 'webapps-react';
```

### Contributing to the webapps-react package

Please make sure you submit all Pull Requests into the [`RTWA\webapps-react`](https://github.com/RTWA/webapps-react) repository, using the `develop` branch.

You must follow our standard [Contributing Guidelines](../).
