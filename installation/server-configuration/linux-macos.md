# Linux/macOS

### Using Apache

The most common setup for a web server on Linux is to use Apache, so if you're not sure what to pick, this may be the best option for you. It's free, easy to configure and well documented.

Having downloaded the [latest release](https://github.com/RTWA/WebApps/releases/latest) from GitHub, extract the ZIP file to a location on your Web Server. For the purposes of this documentation, we will assume that you have extracted the ZIP file to `/var/www/html/WebApps`, but you can choose any folder you like.

Rename the `.env.example` file to `.env` in the root of your installation directory (You may need to enable hidden files to see this).

{% hint style="warning" %}
### Security Warning

Ensure that any folder above the WebApps folder is not presented publicly on your Web Server.
{% endhint %}

Create your Apache virtualhost, it may look something similar to this.

```
<VirtualHost *:80>
    <Directory /var/www/html/WebApps/public>
        Allow From All
        AllowOverride All
        Options -Indexes
    </Directory>

    DocumentRoot /var/www/html/WebApps/public
    ServerName webapps.local
    # We will assume you used this name throughout this documentation
    # Add any other directives here
</VirtualHost>
```

The settings above are sufficient to setup basic HTTP access. This documentation does not cover setting up HTTPS access (although we recommend you do), nor does it cover setting up any DNS requirements.

### Apache on MacOS

Your Apache virtualhost on MacOS may look something like this.

```
<Directory "/Users/youruser/Sites/WebApps/public/">
    All From All
    AllowOverride All
    Options -Indexes
</Directory>

<VirtualHost *:80>
    ServerName "webapps.local"
    DocumentRoot "/Users/youruser/Sites/WebApps/public/"
</VirtualHost>
```

### Other servers

Documentation for configuring other Web Servers may be added at a later date. WebApps should be able to work will all common Web Servers.

### File Permissions

Run the following command to set permissions for your `storage` and `bootstrap\cache` directories. You should change your terminal path (`cd /var/www/html/WebApps`) to your WebApps root path first.

```
chmod -R 775 storage bootstrap/cache
```

You will also need to make your `.env` file writeable during the installation process.

```
chmod 666 .env
```

After installation is complete, run the following command to revert permissions

```
chmod 644 .env
```
