---
title: Master Controller
---

Your App **must** have a Controller called `MasterController` and it should extend the standard Laravel `App\Http\Controllers\Controller` class.

You can declare any App functions in this Controller as you wish. There are no restrictions or limitations on its use.

The `DemoApp` does not use this Controller, but as it must exist, the entire file looks like this:

```php title=Controllers/MasterController.php
<?php

namespace WebApps\Apps\DemoApp\Controllers;

use App\Http\Controllers\AppsController;

class MasterController extends AppsController
{
    //
}

```