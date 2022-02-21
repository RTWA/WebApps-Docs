---
title: Routes
---

## API Routes
You should use standard [Laravel route declarations](https://laravel.com/docs/8.x/routing) in your `Routes\api.php` file.

Your API routes will automatically be loaded and prefixed with `/api/apps/{YourAppSlug}` by the App's [Service Provider](service-provider).<br />
_**Note:** route paths contain the plural word app**s**_

## Web Routes

You should use standard [Laravel route declarations](https://laravel.com/docs/8.x/routing) in your `Routes\web.php` file.

Your web routes will automatically be loaded and prefixed with `/apps/{YourAppSlug}` by the App's [Service Provider](service-provider).<br />
_**Note:** route paths contain the plural word app**s**_

Your views will available with the namespace of your App's slug.<br />
For example the file `/Views/index.blade.php` for `DemoApp` would be accessed by `DemoApp::index`.

:::note A note about Web Routes
Web Routes for your App, must use the prefix `/view`. You should declare this in each of your routes.

Any Web Routes that you declare that do not go to `/apps/{YourAppSlug}/view/{YourRoute}` will not work.
:::

## Protecting Routes
All declared routes will normally have public access.

To ensure a route requires authentication for access, ensure it uses the `auth:sanctum` middleware.<br />
This could be assigned to a `Route::group`, to each individual Route, or on the Controller itself.