---
title: Directory Structure
---

WebApps mostly uses the standard [Laravel directory structure](https://laravel.com/docs/8.x/structure) in its application. Any deviations from this structure will be detailed below.

## The App Directory
The `app` directory contains the core code of WebApps. All of the main classes in WebApps are contained within this directory.

## The Bootstrap Directory
The `bootstrap` directory contains the `app.php` file which bootstraps Laravel. The directory also houses a `cache` directory which contains Laravel generated files for performance optimisation such as the route and services cache files.<br />
You should not need to modify any files within this directory.

## The Config Directory
The `config` directory contains all the of the Laravel and WebApps configuration files. The default configuration provided with WebApps should not need to be modified.

## The Database Directory
The `database` directory contains the WebApps database migration, factory and seed files. These are standard Laravel files.

## The Public Directory
The `public` directory contains the `index.php` file, which is the entry point for all requests made to WebApps. This directory also contains assets such as JavaScript and CSS.

## The Resources Directory
The `resources` directory containes the view blade files as well as the un-compiled assets such as CSS and JavaScript (React).<br />
WebApps does not currently support i18n, but in the future this directory may also contain language files.

## The Routes Directory
The `routes` directory contains all of the route definitions for the main WebApps application.<br />
App-specific routes are not included in this directory.

### The web.php File
The `web.php` file contians routes that are used in the front-end of WebApps. These routes are what will appear in the user's browser address bar.

### The api.php File
The `api.php` file contains routes that are used in the back-end of WebApps. These routes are called from within the React components.

### The console.php File
The `console.php` file contains routes that are used in CLI for WebApps. These routes are called by `php artisan` commands.

### The channels.php File
The `channels.php` file is not currently used by WebApps.

## The Storage Directory
The `storage` directory contains Laravel logs and caches. It is also the location where WebApps Plugins and Apps are downloaded and extracted to.
You can create a Plugin or App directly in this folder during development to be able to test it without being required it to [Submit your App](#) or [Submit your Plugin](#).

## The Tests Directory
The `tests` directory contains our PHPUnit tests.<br />
Any changes you make to WebApps or new features submitted to a pull request must pass these standard tests. Any new features must include a test to cover the new feature.