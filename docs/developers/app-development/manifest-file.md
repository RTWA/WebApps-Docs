---
title: The Manifest File
---

The manifest file is how WebApps knows what your App is and how to present it.<br />
The manifest is saved in a file called `manifest.json` in the root of your App's directory.

## Manifest Keys

The manifest is a JSON object containing the following keys.

### `"name"`
The name of your App. This string can contain alphanumeric characters including spaces.

### `"slug"`
This is the name of your App in slug form (i.e contains no spaces or special characters). It should also be the directory that your App is stored in.

### `"description"`
A short description of your App that will be displayed on the Apps List.

### `"icon"`
The icon of your App. This should contain an SVG string.<br />
_**Note:** any classes applied to the SVG will be ignored._

### `"icon_color"`
The foreground color to display for your icon. Supported formats are the same as css `color` tag.

### `"background_color"`
The background color to display for your icon. Supported formats are the same as css `background-color` tag.

### `"version"`
The current version of your App.

### `"author"`
The author (you!) of your App. This can only be a string at this time.

### `"menu"`
An array of menu objects to display. Each menu object should have the following properties:

**action**<br />
The route to navigate to: `https://webapps.local/apps/MyNewApp/{action}`.<br />
_**Note:** you should **not** provide the preceeding slash `/`._

**text**<br />
The text to display on the menu.

**permission**<br />
The permission required by the user for this item to display.

### `"routes"`
An array of route objects available. Each route object should have the following properties:

**path**<br />
The route path to provide: `https://webapps.local/apps/MyNewApp{path}`.<br />
_**Note:** you should provide the preceeding slash `/`._

**name**<br />
The name of the route. This will probably match the text of the corresponding menu, but that isn't required.

**exact**<br />
Boolean value passed to React Router. Likelyhood is this should be `true`.

**component**<br />
The App Component to display at this route.

**permission**<br />
The permission required by the user for this route to be available.


### `"permissions"`
An array of permission objects to install for the App. Each permission object should have the following properties:

**name**<br />
The key name of the permission. This should always start with `app.` followed by your App's slug (e.g. `MyNewApp.`) then the permission.

**title**<br />
The friendly name of the permission.

**guard**<br />
This currently should always be `web`.

**admin**<br />
Boolean. Should the `Administrators` Group be granted this permission by default. Likelyhood is this should be `true`.

### `"settings"`
An array of key/value Settings objects to install for the App.

**key**<br />
The key for the setting. This should always start with `app.` followed by App's slug (e.g. `MyNewApp.`) then the setting.

**value**<br />
The default value for the setting.


## Example File
Below is the default [Demo App](#) manifest file for v1.0.0 of the App.
```json title=manifest.json
{
    "name": "Demo App",
    "slug": "DemoApp",
    "version": "1.0.0",
    "description": "A simple demo app for WebApps",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path d=\"M12 14l9-5-9-5-9 5 9 5z\" /><path d=\"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z\" /><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222\" /></svg>",
    "icon_color": "#4F46E5",
    "background_color": "#C7D2FE",
    "author": "WebApps",
    "menu": [
        {
            "action": "teams",
            "text": "Manage Teams",
            "permission": "app.demoApp.manageTeams"
        },
        {
            "action": "members",
            "text": "Manage Members",
            "permission": "app.demoApp.manageMembers"
        },
        {
            "action": "points",
            "text": "Add Points",
            "permission": "app.demoApp.addPoints"
        },
        {
            "action": "settings",
            "text": "App Settings",
            "permission": "app.demoApp.appSettings"
        }
    ],
    "routes": [
        {
            "path": "/teams",
            "name": "Manage Teams",
            "exact": true,
            "component": "Teams",
            "permission": "app.demoApp.manageTeams"
        },
        {
            "path": "/members",
            "name": "Manage Members",
            "exact": true,
            "component": "Members",
            "permission": "app.demoApp.manageMembers"
        },
        {
            "path": "/points",
            "name": "Add Points",
            "exact": true,
            "component": "AddPoints",
            "permission": "app.demoApp.addPoints"
        },
        {
            "path": "/settings",
            "name": "App Settings",
            "exact": true,
            "component": "DemoAppSettings",
            "permission": "app.demoApp.appSettings"
        }
    ],
    "permissions": [
        {
            "name": "app.demoApp.manageTeams",
            "title": "Manage Teams",
            "guard": "web",
            "admin": true
        },
        {
            "name": "app.demoApp.manageMembers",
            "title": "Manage Members",
            "guard": "web",
            "admin": true
        },
        {
            "name": "app.demoApp.viewPoints",
            "title": "View Team and Members Points",
            "guard": "web",
            "admin": true
        },
        {
            "name": "app.demoApp.addPoints",
            "title": "Add points to Teams and Members",
            "guard": "web",
            "admin": true
        },
        {
            "name": "app.demoApp.appSettings",
            "title": "Manage App Settings",
            "guard": "web",
            "admin": true
        }
    ],
    "settings": [
        {
            "key": "apps.demoApp.teamWinPoints",
            "value": 5
        },
        {
            "key": "apps.demoApp.memberWinPoints",
            "value": 10
        }
    ]
}
```