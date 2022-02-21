---
title: Developer Commands
---

We believe in supporting our contributers and provide some helpful commands and scripts to perform functions that would be needed during development.

## Artisan Commands

### `webapps:install`
This command is aimed at developers who wish to install WebApps quickly without needing to traverse through the installation wizard.

#### Command Usage
Open your terminal in the WebApps root directory and run
```
php artisan webapps:install
```

#### Command Options
The following options can be used to skip the questions

`--existing` or `-E` - Applying this option will use any existing settings from your `.env` file.<br />
`--developer` or `-D` - Applying this option will enable [Developer Mode](introduction#enable-developer-mode) in WebApps.<br />
`--sample` or `-S` - Applying this option will install [Sample Data](sample-data) into the database.

#### Command Notes
This command will **only** create an internal administrator account if you choose to install sample data. Therefore this option is recommended.

The Theme Colour will be set to a random option and Dark Mode Option will be user configurable.

### `webapps:uninstall`
This command will uninstall WebApps from your system. It will not delete the main WebApps package files, but will optionally delete installed Apps and Plugins.

#### Command Usage
Open your terminal in the WebApps root directory and run
```
php artisan webapps:uninstall
```

#### Command Options
The following options can be used to skip the questions

`--everything` or `-E` - Applying this option will delete all installed Apps and Plugins<br />
`--apps` or `-A` - Applying this option will delete all installed Apps<br />
`--plugins` or `-P` - Applying this option will delete all installed Plugins<br />
`--force` or `-F` - Applying this option will prevent the command for prompting for confirmation before running.

_**Note:** Combine `--force` with `--everything` to complete uninstall WebApps._

### `webapps:reset`
This command is aimed at developers who wish to uninstall and re-install WebApps quickly without needing to traverse through the installation wizard.

#### Command Usage
Open your terminal in the WebApps root directory and run
```
php artisan webapps:reset
```

#### Command Options
The following options can be used to skip the questions

`--sample` or `-S` - Applying this option will install [Sample Data](sample-data) into the database.

#### Command Notes
This command is the equivalent of running
```
php artisan webapps:uninstall -F -E
php artisan webapps:install -E -D (and {-S} if you chose to install Sample Data)
```

### `webapps:sample-data`
This command is aimed at developers who wish to install [Sample Data](sample-data) into the WebApps Database.

#### Command Usage
Open your terminal in the WebApps root directory and run
```
php artisan webapps:sample-data
```

### `test`
This command is the built-in Laravel command for running PHPUnit tests.

#### Command Usage
Open your terminal in the WebApps root directory and run
```
php artisan test
```


## NPM Commands
The following NPM commands can be run in a terminal from the WebApps root directory

### Laravel Mix
`npm run development` OR `npm run dev`<br />
This command will run Laravel Mix in development mode

`npm run watch` OR `npm run watch-poll`<br />
This command will run Laravel Mix in watch mode (poll=1000)

`npm run production` or `npm run prod`<br />
This command will run Laravel Mix in production mode and will result in minified files being generated.

### Jest
`npm run test` or `npm run test-verbose`<br />
This command will run Jest to test the JavaScript assets.


## Other Commands

### PHP Code Sniffer
To run PHP Code Sniffer, run the following command in a terminal from the WebApps root directory
```
vendor/bin/phpunit
```
_**Note:** Windows PowerShell users may need to use `./vendor/bin/phpunit` instead._

### Make Production App Version
A PowerShell script created to assist with generating a release for your App. More information can be found in [Releasing your App](#).

### Make Production Plugin Version
A PowerShell script created to assist with generating a release for your Plugin. More information can be found in [Releasing your Plugin](#).