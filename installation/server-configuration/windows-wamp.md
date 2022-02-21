# Windows/WAMP

{% hint style="info" %}
This documentation will not take you through the steps required to install WampServer (WAMP), nor creating the MySQL database.
{% endhint %}

## Ensure WAMP PHP Version is compatible

After installing WampServer, you must ensure your active version of PHP is compatible with WebApps.

Locate the WampServer system tray icon and left-click on it. Find the `PHP` option and then the `Version` option. Ensure a version greater the `7.4` is selected.

## Setting up an WAMP Website

Having downloaded the [latest release](https://github.com/RTWA/WebApps/releases/latest) from GitHub, extract the ZIP file to a location on your Web Server. For the purposes of this documentation, we will assume that you have extracted the ZIP file to `C:\wamp64\WebApps`, but you can choose any folder you like.

Rename the `.env.example` file to `.env` in the root of your installation directory (You may need to enable hidden files to see this).

{% hint style="warning" %}
### Security Warning

Ensure that any folder above the WebApps folder is not presented publicly on your Web Server (i.e. It is not within the www folder of your WAMP installation).
{% endhint %}

Locate the WampServer system tray icon and left-click on it. Find the option `Your VirtualHosts` and then select `VirtualHost Management`.

Provide the name of your Virtual Host - this is the domain name that will be used for WebApps, we're using `webapps.local` in our examples.

Provide the complete absolute path to your WebApps **public** folder - `C:\wamp64\WebApps\public` in our example.

Optionally configure your listen ports as required for your WampServer.

Click on the button `Start the creation of the VirtualHost (May take a while...)` and follow the on-screen prompts to restart your DNS when required.

{% hint style="danger" %}
### Danger

You should mark the `.env` file as Read-Only after you have installed WebApps through your web browser.
{% endhint %}

You are now ready to install WebApps using your web browser
