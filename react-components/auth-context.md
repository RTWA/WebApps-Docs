You can be access the `Auth` Context through the `webapps-react` package, with both the Context and Higher Order Components being accessible.

The `Auth` Context contains the functions for authenticating a user with an internal WebApps account.<br />
The Context then stores information relating to the user and any preferences they have set.

## Functions
The following functions are provided by the `Auth` Context.

### Sign In / Sign Out
The `signIn` function requires two parameters, a `username` and a (plain-text) `password`.<br />
The function will then complete a Promise to authenticate the user. If the user is successfully authenticated the Promise will resolve with the User object.
If authentication fails, the Promise will reject returning any error provided.

The `signOut` function does not require any parameters.<br />
The function will complete a Promise to sign out the user. If the user is successfully signed out, the Promise will return true and redirect the browser to the login screen.
If the sign out fails to commplete, the Promise will reject returning any error provided.

### Set User
The `setUser` function is used within the `Auth` context to set the current user and authentication state. This is exposed in the context as we plan to implement an "Acting As" type feature to WebApps in the future.

### Check Authentication
The `checkAuthentication` function will perform a check on the user to see if they are authenticated or not. This function is called when the `Auth` Context is loaded and sets the `authenticated` property.

### Check Permission
The `checkPermission` function will check if the currently authenticated user has a specified permission or not. It takes a parameter of `permission` which should equal the `name` of the permission you wish to check. A boolean value is returned.

### Set Preference
The `setPreference` function requires two parameters, the `preference` (the key) and it's `value`. User preferences are stored against the user in a single text column using a JSON array. The array is stored in a key/value pair.<br />
_**Notes:** this function will not return any data._


## Properties

### The User Object
The `user` object provides access to the User object. The User object contains the following properties.

- **`name`** - The name of the user.<br />
- **`username`** - The username of the user.<br />
- **`email`** - The email address of the user.<br />
- **`active`** (bool) - True if the user is enabled, false if they are disabled.<br />
- **`number_of_blocks`** (int) - The number of Blocks this user has created.<br />
- **`id`** (int) - The database ID of the user.<br />
- **`provisioned`** - This will contain the Microsoft Azure Active Directory GUID if the user was provisioned.<br />
- **`created_at`** - The date and time that the user record was created.<br />
- **`updated_at`** - The date and time that the user record was last updated.

### Authenticated State
The `authenticated` property provides a simple boolean value. True if the user is authenticated, false if the user is not authenticated.

### User Preferences
The `preferences` object provides the key/value array of the users set preferences. You can access the preference key in dot notation.<br />
For example, to retrieve the value for the `dark_mode` key you would use `preferences.dark_mode`.

## Using the Context

The `Auth` Context is provided at the very top level of the WebApps structure. You will not need to provide the `Auth` Context in any other Component.

The `Auth` Context is [...] in Apps.

### React Class Components
In order to use the `Auth` Context within a React Class Component, you first must import the Context with the following import statement.
```jsx
import { AuthContext } from 'webapps-react';
```

You can then wrap your component with the `AuthContext.Consumer` Component.

Refer to the [React Context Documentation](https://reactjs.org/docs/context.html) for further guidance.

### Functional Components
Within a Functional Component you have two options for using the `Auth` Context.

#### The `useContext` Hook
First you will need two import statements.
```jsx
import { useContext } from 'react';
import { AuthContext } from 'webapps-react';
```

Then within your component, you can use the context in one of two ways.

To use the entire context:
```jsx
const ctx = useContext(AuthContext);

return ctx.user.username;
```

To get the user object straight from the context
```jsx
const { user } = useContext(AuthContext);

return user.username;
```

#### Higher Order Component
You will need to import the HOC into your Component with the following import statement.
```jsx
import { withAuth } from 'webapps-react';
```

Then you need to wrap your Component export statement as follows:
```jsx
export default withAuth(YourComponent);
```

This will add the Context's functions and properties to your Components props.

Below is a full example of a Functional Component that would return the username of the authenticated user.
```jsx
import React from 'react';
import { withAuth } from 'webapps-react';

const Username = ({ user, ...props }) => {
    return <p {...props}>{user.username}</p>
}

export default withAuth(Username);
```

You could then use this Component as follows
```jsx
<Username className="text-sm" />
```