# Installation

WebApps uses a web based installation wizard. Open your web browser at your WebApps URL (`webapps.local` if you're following along).

Complete all steps of the installation wizard, you will be presented with the WebApps login screen once complete.

The installation wizard can only be run once, if you make a mistake or want to change a setting later on, you'll need to run the installation wizard again. You can force WebApps to display the installation wizard by deleting the file in `<WebApps Root>\storage\webapps\installed.json`.

{% hint style="info" %}
You cannot proceed to step 2 of the installation wizard if you do not meet the system requirements

You must have already created a suitable database, the installation wizard will create the required tables

You must always have at least one administrator account
{% endhint %}

{% hint style="danger" %}
Once you have completed the installation wizard, it is safest to reset permissions on the `.env` file to allow read and execute only (555 on Linux/macOS) and mark the file as Read-Only.
{% endhint %}

### Create a scheduled task to run the WebApps Tasks once every minute

{% tabs %}
{% tab title="Linux" %}
* Go to the terminal
* Open your crontab (cron configuration file) with the following command\
  `crontab -e`\
  The first line in this file explains everything you will need to know.
* Add the following command:\
  `* * * * * cd /var/www/html/WebApps && php artisan schedule:run >> /dev/null 2>&1`\
  \* Replace `/var/www/html/WebApps` with your web server root folder
{% endtab %}

{% tab title="Windows" %}
* Open Task Scheduler
* In the right-hand actions menu, select `Create Task...`
* Use the name field to create a descriptive name, we recommend "WebApps Tasks"
* Select the option to "Run whether a user is logged on or not"
* Select the "Hidden" option
* Create a new trigger:
  * Begin the task: _On a schedule_
  * Run Daily
  * Starting at midnight
  * Recurs every 1 day
  * Repeats every _1 minute_ for a duration of _Indefinitely_
  * Enabled (checked)
* Create a new action:
  * Action: _Start a program_
  * Program/Script: `C:\your\path\to\php\php.exe`\
    \* Replace the path to your php executable
  * Add Arguments (optional): `C:\inetpub\WebApps\artisan schedule:run`\
    \* Replace the path to your web server root folder
* Select the OK button to create the task
* You may be prompted to enter a user to run the task as, please use an account with administrative rights
{% endtab %}
{% endtabs %}

**Login to WebApps and start configuring!**
