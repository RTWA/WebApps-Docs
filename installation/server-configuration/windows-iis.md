# Windows/IIS

{% hint style="info" %}
This documentation will not take you through the steps required to install the IIS Role, IIS URL Rewrite, Microsoft SQL Server, PHP or the PHP SQLServ PDO Extension
{% endhint %}

## Setting up an IIS Website

Having downloaded the [latest release](https://github.com/RTWA/WebApps/releases/latest) from GitHub, extract the ZIP file to a location on your Web Server. For the purposes of this documentation, we will assume that you have extracted the ZIP file to `C:\inetpub\WebApps`, but you can choose any folder you like.

Rename the `.env.example` file to `.env` in the root of your installation directory (You may need to enable hidden files to see this).

{% hint style="warning" %}
#### Security Warning

Ensure that any folder above the WebApps folder is not presented publicly on your Web Server (i.e. It is not within the wwwroot folder if you have the Default Site still running).
{% endhint %}

Open IIS Manager, right-click on `Sites` and select `Add Website`. In the new window that appears, complete the following fields and click OK.

```
Site name: WebApps (or a name of your choice)
Physical path: C:\inetpub\WebApps\public
Binding:
    Type: HTTP
    IP Address: All Unassigned or a specific IP if you have one you will be using
    Port: 80 or any you wish to use
    Host name: webapps.local
    (We will assume you used this name throughout this documentation)
```

The settings above are sufficient to setup basic HTTP access. This documentation does not cover setting up HTTPS access (although we recommend you do), nor does it cover setting up any DNS requirements.

### Enable additional HTTP verbs

IIS does not enable the DELETE or PUT verbs by default. WebApps uses the verbs within it's API, so you need to enable them.

* Open IIS Manager
* Select your WebApps site
* Open the option "Handler Mappings"
* Open the option "PHP Mappings" (there may be more than one)
* Click on "Request Restrictions" and select the "Verbs" tab
* Add `DELETE,PUT,PATCH` to the list of verbs so that it reads `GET,HEAD,POST,DELETE,PUT,PATCH`
* Save the changes
* Repeat these steps for any other "PHP Mappings" options.

### NTFS Permissions

#### Add permissions for the IIS user for the `storage` folder:

1. Open Windows Explorer
2. Navigate to the root of your installation directory (`C:\inetpub\WebApps` if you're following along)
3. Right-click on the `storage` folder and select Properties
4. Select the Security tab and click on the Advanced button
5. Select or Add the `IUSR` local user and set the following allow permissions
   * Modify
   * Read & execute
   * List folder contents
   * Read
   * Write
6. Tick the box labelled "Replace all child object permission entries with inheritable permission entries from this object"
7. Click OK and wait for the permissions to apply, then click OK on the properties window

#### Add permissions for the IIS user for the `bootstrap\cache` folder:

1. Open Windows Explorer
2. Navigate to the root of your installation directory (`C:\inetpub\WebApps` if you're following along)
3. Enter the `bootstrap` folder
4. Right-click on the `cache` folder and select Properties
5. Select the Security tab and click on the Advanced button
6. Select or Add the `IUSR` local user and set the following allow permissions
   * Modify
   * Read & execute
   * List folder contents
   * Read
   * Write
7. Tick the box labelled "Replace all child object permission entries with inheritable permission entries from this object"
8. Click OK and wait for the permissions to apply, then click OK on the properties window

#### Add permissions for the IIS user for the `public` folder:

1. Open Windows Explorer
2. Navigate to the root of your installation directory (`C:\inetpub\WebApps` if you're following along)
3. Right-click on the `public` folder and select Properties
4. Select the Security tab and click on the Advanced button
5. Select or Add the `IUSR` local user and set the following allow permissions
   * Modify
   * Read & execute
   * List folder contents
   * Read
   * Write
6. Tick the box labelled "Replace all child object permission entries with inheritable permission entries from this object"
7. Click OK and wait for the permissions to apply, then click OK on the properties window

#### Add permissions for the IIS user for the `.env` file:

1. Open Windows Explorer
2. Navigate to the root of your installation directory (`C:\inetpub\WebApps` if you're following along)
3. Right-click on the `.env` file and select Properties
4. Select the Security tab and click on the Advanced button
5. Select or Add the `IUSR` local user and set the following allow permissions
   * Modify
   * Read & execute
   * List folder contents
   * Read
   * Write
6. Click OK and wait for the permissions to apply, then click OK on the properties window

{% hint style="danger" %}
#### Danger

You should reset the permissions to the `.env` file **and** mark the file as Read-Only after you have installed WebApps through your web browser.
{% endhint %}

You are now ready to install WebApps using your web browser
