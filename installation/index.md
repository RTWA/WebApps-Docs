
WebApps uses a web based installation wizard. Open your web browser at your WebApps URL (`webapps.local` if you're following along).

Complete all steps of the installation wizard, you will be presented with the WebApps login screen once complete.

The installation wizard can only be run once, if you make a mistake or want to change a setting later on, you'll need to run the installation wizard again. You can force WebApps to display the installation wizard by deleting the file in `<WebApps Root>\storage\webapps\installed.json`.

{% hint style="info" %}
- You cannot proceed to step 2 of the installation wizard if you do not meet the system requirements
- You must have already created a suitable database, the installation wizard will create the required tables
- You must always have at least one administrator account
{% endhint %}

{% hint style="danger" %}
Once you have completed the installation wizard, it is safest to reset permissions on the `.env` file to allow read and execute only (555 on Linux/macOS) and mark the file as {% endhint %}

## Create a scheduled task to run the WebApps Tasks once every minute

<Tabs
  groupId="operating-systems"
  defaultValue="nix"
  values={[
    {label: 'Linux/macOS', value: 'nix'},
    {label: 'Windows', value: 'win'},
  ]
}>
<TabItem value="nix">
<ol>
    <li>Go to the terminal</li>
    <li>Open your crontab (cron configuration file) with the following command<br />
        <code>crontab -e</code><br />
        The first line in this file explains everything you will need to know.
    </li>
    <li>Add the following command:<br />
        <code>* * * * * cd /var/www/html/WebApps && php artisan schedule:run >> /dev/null 2>&1</code><br />
        * Replace <code>/var/www/html/WebApps</code> with your web server root folder
    </li>
</ol>
</TabItem>
<TabItem value="win">
<ol>
    <li>Open Task Scheduler</li>
    <li>In the right-hand actions menu, select <code>Create Task...</code></li>
    <li>Use the name field to create a descriptive name, we recommend "WebApps Tasks"</li>
    <li>Select the option to "Run whether a user is logged on or not"</li>
    <li>Select the "Hidden" option</li>
    <li>Create a new trigger:
        <ul class="list">
            <li>Begin the task: <em>On a schedule</em></li>
            <li>Run Daily</li>
            <li>Starting at midnight</li>
            <li>Recurs every 1 day</li>
            <li>Repeats every <em>1 minute</em> for a duration of <em>Indefinitely</em></li>
            <li>Enabled (checked)</li>
        </ul>
    </li>
    <li>Create a new action:
        <ul class="list">
            <li>Action: <em>Start a program</em></li>
            <li>Program/Script: <code>C:\your\path\to\php\php.exe</code><br />
                * Replace the path to your php executable
            </li>
            <li>Add Arguments (optional): <code>C:\inetpub\WebApps\artisan schedule:run</code><br />
                * Replace the path to your web server root folder
            </li>
        </ul>
    </li>
    <li>Select the OK button to create the task</li>
    <li>You may be prompted to enter a user to run the task as, please use an account with administrative rights</li>
</ol>
</TabItem>
</Tabs>

---

**Login to WebApps and start configuring!**