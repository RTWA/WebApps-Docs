---
title: Application Settings
---
import { Badge } from 'webapps-react';


The Application section is used to configure a few core options of WebApps.
Settings are saved as soon as your cursor leaves the field you are changing.

### Enable Error Reporting
If you enable this option, your WebApps installation will report any crashes or issues to the WebApps team using a product called [Sentry](https://sentry.io). Please refer to the [Sentry Privacy Policy](https://sentry.io/privacy/) and the [Error Reporting](#) section of the [WebApps Privacy Policy](#).

### Theme Colour
Here you can choose from a small selection of preset theme colour options, or set your own theme by selecting the Custom option. Selecting an option will immediately apply that colour theme to WebApps.

### Custom Colour <Badge color="indigo-500 dark:bg-indigo-600" pill>From v1.0.3</Badge>
If you have set `Theme Colour` to the Custom option, this field will appear.

Enter the HEX colour code (e.g `#AABB22`) of your companies branding. The colour will become the midpoint colour, with 5 lighter and 4 darker shades created from it. These will be previewed below the Custom Colour field.

### Dark Mode Option
Below is a description for the behaviour of each of the Dark Mode Option options.

#### Light Mode Only
Only the Light theme mode will apply to WebApps

#### Dark Mode Only
Only the Dark theme mode will apply to WebApps

#### Allow the user to choose between Light and Dark Mode
The user will be able to set which mode they would like to use in WebApps. If their system preferences are set to prefer dark mode applications WebApps will run in Dark Mode automatically.

:::note
The Dark Mode Option also affects Blocks and Apps that are embedded into your CMS. Bear this in mind when selecting your option.
:::

### Display "Return to CMS" Link, CMS URL and "Return to CMS" Link Text
These options all affect the display of the "Return to CMS" link displayed at the bottom of the sidebar menu within WebApps.

The URL should be the full URL to your chosen CMS, with the link text being the text that will be displayed in the sidebar.