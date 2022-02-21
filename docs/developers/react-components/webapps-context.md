---
title: WebApps Context
---

You can be access the `WebApps` Context through the `webapps-react` package, with both the Context and Higher Order Components being accessible.

The `WebApps` Context contains the functions for loading the required navigation elements, WebApps settings, retrieving App and Plugin information and setting other UI elements.<br />
The Context stores information relating to the WebApps UI, navigation, Apps and Plugins.

## Functions
The following functions are provided by the `WebApps` Context.

### Load Navigation
The `loadNavigation` function can be used to reload all of the navigation information. This is mainly used when changes to the sidebar properties have been made.<br />For example, when an App or Plugin is activated or deactived, the `loadNavigation` function is called to update the sidebar.

### Set UI
The `setUI` function is used to update the value of a UI property. This is used mainly when updating values on the settings pages.

### Set Modals & Toggle Modal
The `setModals` function can be used to directly set the value of the `modals` property.<br />
The `toggleModal` function requires one parameter, the `key` of the modal window. This will set the state of that modal opposite to the current boolean value.


## Properties

### The UI Object
The `UI` object provides access to the UI WebApps Settings. The following properties are currently available:

- **`theme`** - The chosen Theme Colour of WebApps.<br />
- **`dark_mode`** - The chosen Dark Mode Option of WebApps.<br />
- **`envWriteable`** (bool) - True if the `.env` file is writeable. This is used to display the warning banner.

### The Navigation Obeject
The `navigation` object provides the sidebar menu values and React route information.

- **`menu`** - An array of sidebar menu options. Each value has a Component type to decide how it should be displayed.
- **`routes`** - An array of React routes. Each value has a Component type to decide what should be displayed on that route.
- _**`settings`** - An array of Settings navigation routes*._

_\***This property is no longer used and will be removed in a future version of `webapps-react`.**_

### The Modals Object
The `modals` object is stored in the user's web browser localStorage, so that it's values are accessible between different `WebApps` Context Providers.

It is used to store the state of a modal by its unique `key`. The object can also be used to pass (and persist) additional properties to each modal.

For example, the `<PreviewBlock />` modal uses the `key` `preview_blocks`, but relies on the following properties within this key:<br />
`modals.preview_blocks.show` - Whether to display the modal or not.<br />
`modals.preview_blocks.block` - The Block information to display.<br />
`modals.preview_blocks.delete` - The function to be used when deleting the Block from the modal window.

Because of the way this modal is used, you cannot use the `toggleModal` function and instead you would close the modal with the following:
```jsx
const closeModal = () => {
    delete modals.preview_blocks;
    setModals({ ...modals });
}
```
This would remove the `preview_blocks` key from the `modals` object.

### The Apps Object
The `apps` object contains the following properties.

- **`local`** - An array of all locally available Apps*, and their current state.<br />
- **`online`** - An array of all available Apps, and their current state. These include the locally available Apps* and Apps that are available to download.

_\* Locally available Apps are Apps that are already in the `<root>/storage/webapps/apps` directory._
  
The following properties are functions that take an event parameter. The event must have `event.target.dataset.slug` set to the slug of the App to perform the action on.

- **`download`** - Set the slug of the App to download. The App will then be downloaded and become a locally available App.<br />
- **`install`** -  Set the slug of the App to be installed.<br />
- **`uninstall`** - Set the slug of the App to be uninstalled.<br />
- **`update`** - Set the slug of the App to be updated.<br />
- **`activate`** - Set the slug of the App to be activated.<br />
- **`deactive`** - Set the slug of the App to be deactivated.


### The Plugins Object
The `plugins` object contains the following properties.

- **`all`** - An array of all locally available Plugins*, irregardless of their current state.<br />
- **`active`** - An array of all locally available Plugins*, and their current state, but only if they are active.<br />
- **`online`** - An array of all available Plugins, and their current state. These include the locally available Plugins* and Plugins that are available to download.
  
_\* Locally available Plugins are Plugins that are already in the `<root>/storage/webapps/plugins` directory._
  
The following properties are functions that take an event parameter. The event must have `event.target.dataset.slug` set to the slug of the App to perform the action on.

- **`download`** - Set the slug of the Plugin to download. The Plugin will then be downloaded and become a locally available Plugin.<br />
- **`update`** - Set the slug of the Plugin to be updated.<br />
- **`uninstall`** - Set the slug of the Plugin to be uninstalled.<br />
- **`toggle`** - Set the slug of the Plugin to be activated or deactivated.

## Using the Context

The `WebApps` Context is provided in the WebApps structure once the user has authenticated. You should not need to provide the `WebApps` Context in any other Component.

The `WebApps` Context is provided to Apps from the higher level described above. You will not need to provide the `WebApps` Context to your App.

### React Class Components
In order to use the `WebApps` Context within a React Class Component, you first must import the Context with the following import statement.
```jsx
import { WebAppsContext } from 'webapps-react';
```

You can then wrap your component with the `WebAppsContext.Consumer` Component.

Refer to the [React Context Documentation](https://reactjs.org/docs/context.html) for further guidance.

### Functional Components
Within a Functional Component you have two options for using the `WebApps` Context.

#### The `useContext` Hook
First you will need two import statements.
```jsx
import { useContext } from 'react';
import { WebAppsContext } from 'webapps-react';
```

Then within your component, you can use the context in one of two ways.

To use the entire context:
```jsx
const ctx = useContext(WebAppsContext);

return ctx.UI.theme;
```

To get the UI object straight from the context
```jsx
const { UI } = useContext(WebAppsContext);

return UI.theme;
```

#### Higher Order Component
You will need to import the HOC into your Component with the following import statement.
```jsx
import { withWebApps } from 'webapps-react';
```

Then you need to wrap your Component export statement as follows:
```jsx
export default withWebApps(YourComponent);
```

This will add the Context's functions and properties to your Components props.

Below is a full example of a Functional Component that would return the UI theme value.
```jsx
import React from 'react';
import { withWebApps } from 'webapps-react';

const UITheme = ({ UI, ...props }) => {
    return <p {...props}>{UI.theme}</p>
}

export default withWebApps(UITheme);
```

You could then use this Component as follows
```jsx
<UITheme className="text-sm" />
```