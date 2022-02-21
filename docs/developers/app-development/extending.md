---
title: Extending
---

You can extend your App with most Laravel package options, provided their containing directories are added to your App's [Service Provider](service-provider)'s Boot function's `$folders` variable.
:::note
TODO: THIS NEEDS ADDING SOMEHOW TO THE PS1 SCRIPT TOO!
:::

## Commands
You can create [Laravel Commands](https://laravel.com/docs/8.x/packages#commands) by creating a Commands directory and create your command within it.<br />
Your Command's signature must start with your App's slug, folowed by a colon `:`.

Below is a full Command example from the `StaffDirectory` App.

```php title=Commands/StaffDirectoryDeleteTrash.php
<?php

namespace WebApps\Apps\StaffDirectory\Commands;

use Illuminate\Console\Command;
use WebApps\Apps\StaffDirectory\Models\Person;

class StaffDirectoryDeleteTrash extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'StaffDirectory:delete-trash';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Person::onlyTrashed()->where('deleted_at', '<', date('Y-m-d H:i:s', strtotime("-30 days")))->forceDelete();
        $this->info('Trashed records deleted');
        return 0;
    }
}

```

## Schedule Commands
In order to schedule Commands you need to add data to the `apps_scheduler` database table. This could be done with the `install()` `AppManagerController` function of your App.

First, you must always check the `apps_scheduler` table exists and abort with a 500 status code if it does not.
```php
if (!Illuminate\Support\Facades\Schema::hasTable('apps_scheduler')) {
    abort(500, "Apps scheduler table does not exist");
}
```

The `apps_scheduler` table has the following 5 fields:

* `id` (index) - auto incrementing, primary key. You should not supply this.
* `app` (string) - your App's slug.
* `command` (string) - the Command to run.
* `last_run` (DateTime) - when the command was last run. When inserting, you should provide a date/time in the past to trigger the schedule.
* `schedule` (string) - how often the command should run. This should be interpretable by [PHPs `strtotime()` function](https://www.php.net/manual/en/function.strtotime.php).

Before inserting your command, you should check if it exists already.<br />
Below is an example from the `StaffDirectory` App.

```php title=Controllers/AppManagerController.php
if (!Illuminate\Support\Facades\DB::table('apps_scheduler')->where('command', '=', 'StaffDirectory:delete-trash')->first()) {
    Illuminate\Support\Facades\DB::insert([
        'app' => 'StaffDirectory',
        'command' => 'StaffDirectory:delete-trash',
        'last_run' => date('Y-m-d 00:00:00'),
        'schedule' => '+1 day',
    ]);
}
```

You should remove the record whenever the `uninstall()` `AppManagerController` function of your App is called.

Below is an example from the `StaffDirectory` App, having already checked if the `apps_scheduler` table exists.

```php title=Controllers/AppManagerController.php
if (Illuminate\Support\Facades\DB::table('apps_scheduler')->where('command', '=', 'StaffDirectory:delete-trash')->first()) {
    Illuminate\Support\Facades\DB::table('apps_scheduler')->where('command', '=', 'StaffDirectory:delete-trash')->delete()
}
```