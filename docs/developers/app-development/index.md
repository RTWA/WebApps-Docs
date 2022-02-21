---
title: App Development
sidebar_label: Introduction
---

Developing Apps requires a working knowledge of [Laravel Package Development](https://laravel.com/docs/8.x/packages) with some additional caveats applied to work with WebApps.

Whilst not required we highly recommend you clone the [Demo App](https://github.com/RTWA/App-DemoApp) and use that as the base of your new App.<br />
Use the following command to clone the App into a directory named MyNewApp.
```
git clone https://github.com/RTWA/App-DemoApp.git MyNewApp
```

You should open the `Providers` directory and rename the file `DemoAppServiceProvider.php` to `MyNewAppServiceProvider.php`.<br />
Then open the file and rename the class to `MyNewAppServiceProvider`.<br />
_(replace `MyNewApp` with your App's slug)_

Open all PHP files and update the namespace and using statements to contain your App's slug.

You could do this with find and replace, by searching for `WebApps\Apps\DemoApp\` and replace with `WebApps\Apps\MyNewApp\`.<br />
This method would also update all using statements, otherwise you will need to update these manually too.

Install the required NPM packages with the following command
```
npm install
```

Update the [App manifest](manifest-file) and copy or symlink the `MyNewApp` directory into your `<WebApps Root>/storage/webapps/apps` directory and you'll be able to install and activate the App for development in your installation of WebApps.

## Basic App Directory Structure

```
-- MyNewApp
 |- Controllers
 | |- AppManagerController.php
 | |- MasterController.php
 | └- (Additional Controller Files)
 |- Models
 | └- (Your App Models)
 |- node_modules *
 |- Providers
 | └- MyNewAppServiceProvider.php
 |- public
 |- resources *
 |- Routes
 | |- api.php
 | └- web.php
 |- Views
 | └- index.blade.php
 |- .gitignore *
 |- manifest.json (The Manifest File)
 |- pacakage-lock.json *
 |- package.json *
 └- webpack.mix.js *
```

\* These files or directories are not required to be submitted as they are used only for development.