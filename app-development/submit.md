# Submitting An App

To submit your App, you will be required to register an account at [WebApps Studio](https://studio.getwebapps.uk).

## Create a production version

{% hint style="success" %}
### Top Tip!

A helper PowerShell script is included in the GitHub Repository for [WebApps](https://github.com/RTWA/WebApps), inside of the [`.developers` folder](https://github.com/RTWA/WebApps/tree/develop/.developers). The PowerShell script completes the required tasks as described below.\
`Make Production App Version.ps1`
{% endhint %}

### Update The Manifest File

You should ensure your [App's Manifest File](manifest-file.md) is up-to-date and has the latest version number in it.

### Install Node Dependencies

You should install your node packages, excluding any `devDependencies`. You should do this by running the following command.

```
npm install --production
```

### Transpile Your Code

Any javascript code needs to be transpiled, and minified, so that it is ready to use with WebApps.\
If you used the `DemoApp` GitHub Repository to build your App from, [Laravel Mix](https://laravel-mix.com) is already configured.

Check the contents of the `webpack.mix.js` file, updating any references to `DemoApp` to `YourAppsSlug`, then you can run the following command.

```
npm run production
```

### Remove Redundant Directories

Compare your directory structure, with the [Basic App Directory Structure](index.md#basic-app-directory-structure) and remove any redundant directories.

Our PowerShell script actually does this differently and copies the required directories to a new directory inside of a `releases` directory.\
You could do this either way.

The benefit of copying the require files, is that you will not cause any issues with `.git` or `.vscode` directories that may contain information relating to your project on GitHub or VSCode.

### Create A ZIP File

Your App will be required to be uploaded to [WebApps Studio](https://studio.getwebapps.uk) in a ZIP file. So create one now, ensuring it contains all the required files and directories.

### Upload To WebApps Studio

Having registered an account on [WebApps Studio](https://studio.getwebapps.uk). You can then navigate to My Apps.

If this is a new App, click on the `Submit an App` button and follow the wizard, uploading your (not zipped) [Manifest File](manifest-file.md) to begin with.

If this is an update to an existing App, locate your App and click on the `Submit a new release` button.

You will be required to upload the ZIP file for your App Release and optionally provide any extra details or a changelog.

Once you are ready, click on the `Publish Now` button for your App Release!

_**Please note:** Live WebApps installations may not show your new App is available for up to 7 days. This is because WebApps caches the information it holds on published Apps._
