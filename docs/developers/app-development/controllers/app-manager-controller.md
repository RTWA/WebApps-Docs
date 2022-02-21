---
title: App Manager Controller
---

Your App **must** have a Controller called `AppManagerController` and it should extend the `App\Http\Controllers\AppManagerController` class.

As the classes have the same name, you should rename the original class in the using statement by declaring
```php title=Controllers/AppManagerController.php
use App\Http\Controllers\AppManagerController as Controller;
```

## Using statements
In additon to the `AppManagerController` as described above, the following 2 using statements are required in your `AppManagerController` file.<br />
If your App does not create any database tables, these using statements can be skipped or removed.

```php title=Controllers/AppManagerController.php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
```

Your `AppManagerController` should declare the following 3 functions.

## The Construct function
This function is declared in the `App\Http\Controllers\AppManagerController`.<br />
It will read [The Manifest File](../manifest-file) and assign it to class properties.

If you need this function to perform more actions, you should ensure you add your code **after** the `parent::__construct();` call.<br />
The `parent::__construct()` function requies the array of data from [The Manifest File](../manifest-file), therefore you should call it as shown below.

```php title=Controllers/AppManagerController.php
public function __construct()
{
    parent::__construct(json_decode(file_get_contents(__DIR__.'/../manifest.json'), true));

    // Your code here
}
```

## The Install method
This function is called when the App is installed in WebApps. You can use this function to create new database tables.<br />
The functions `createPermissions()` and `createSettings()` should be called to setup your App's permissions and settings as defined in [The Manifest File](../manifest-file).<br />
The example below also calls a custom function called `copyAppJS()`, this is described below.

The Install function shown below is from the `DemoApp` App and creates two tables.

You should **always** check for existance of the tables before creating them as this may cause the App's install to fail.<br />
Your tables should **always** follow the naming convention: `app_{YourAppSlug}_{TableName}`.

```php title=Controllers/AppManagerController.php
public function install()
{
    if (!Schema::hasTable('app_DemoApp_Teams')) {
        Schema::create('app_DemoApp_Teams', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('points')->default(0);
            $table->timestamps();
        });
    }
    if (!Schema::hasTable('app_DemoApp_Members')) {
        Schema::create('app_DemoApp_Members', function (Blueprint $table) {
            $table->id();
            $table->string('forename');
            $table->string('surname');
            $table->string('short_name');
            $table->foreignId('team_id')->constrained('app_DemoApp_Teams');
            $table->integer('points')->default(0);
            $table->timestamps();
        });
    }
    $this->createPermissions();
    $this->createSettings();
    $this->copyAppJS();
}
```

## The Uninstall function
The opposite to the install function. This will be called when the App is uninstalled. It should remove any tables that your App created.

The Uninstall function shown below is from the `DemoApp` App and removes the two tables it created.

The functions `dropPermissions()` and `dropSettings()` should be called to remove your App's permissions and settings as defined in [The Manifest File](../manifest-file).<br />
Any additional files that were installed with the `install()` function should be removed by this function.<br />
In the case of `DemoApp` this is handled by calling the custom function `dropAppJS()`.

```php title=Controllers/AppManagerController.php
public function uninstall()
{
    Schema::dropIfExists('app_demoApp_Teams');
    Schema::dropIfExists('app_demoApp_Members');
    $this->dropPermissions();
    $this->dropSettings();
    $this->dropAppJS();
}
```

## Custom Functions
You can create any number of custom functions, which you can call from other functions in this Controller (or other Controllers).

The `DemoApp` for example, creates 2 custom functions. One for copying any required JS files and another for removing them.<br />
These functions are optional, but are likely to be required by all apps.<br />
You should always check if a file or directory exists before trying to delete or copy a file into it. Your App will not install if any error occurs in these functions.

```php title=Controllers/AppManagerController.php
private function copyAppJS()
{
    $js = __DIR__ . '/../public/DemoApp.js';
    $js2 = __DIR__.'/../public/DemoApp_view.js';
    $path = public_path("js/apps/");

    if (!file_exists($path)) {
        mkdir($path, 0777, true);
    }

    if (file_exists($path . $this->slug . '.js')) {
        unlink($path . $this->slug . '.js');
    }
    copy($js, $path . $this->slug . '.js');

    if (file_exists($path.$this->slug.'_View.js')) {
        unlink($path.$this->slug.'_View.js');
    }
    copy($js2, $path.$this->slug.'_View.js');
}

private function dropAppJS()
{
    $path = public_path("js/apps/");
    if (file_exists($path . $this->slug . '.js')) {
        unlink($path . $this->slug . '.js');
    }
    if (file_exists($path.$this->slug.'_View.js')) {
        unlink($path.$this->slug.'_View.js');
    }
}
```