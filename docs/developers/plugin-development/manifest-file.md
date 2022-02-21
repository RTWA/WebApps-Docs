---
title: The Manifest File
---

The manifest file is how WebApps knows what your Plugin is and how to present it.<br />
The manifest is saved in a file called `plugin.json` in the root of your Plugin's directory.

## Manifest Keys

The manifest is a JSON object containing the following keys.

### `"name"`
The name of your Plugin. This string can contain alphanumeric characters including spaces.

### `"slug"`
This is the name of your Plugin in slug form (i.e contains no spaces or special characters). It should also be the directory that your Plugin is stored in.

### `"icon"`
The icon of your Plugin. This should contain an SVG string.<br />
_**Note:** any classes applied to the SVG will be ignored._

### `"version"`
The current version of your Plugin.

### `"author"`
The author (you!) of your Plugin. This can only be a string at this time.


## Example File
Below is the default [Sample Plugin](#) manifest file for v1.0.0 of the Plugin.
```json title=plugin.json
{
    "name": "Sample",
    "slug": "Sample",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\"><path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\" /></svg>",
    "version": "1.0.0",
    "author": "WebApps"
}
```