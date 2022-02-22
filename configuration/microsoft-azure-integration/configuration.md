# Configuration

Ensure you have completed the [Microsoft Azure Integration (Setup)](setup.md) steps first.

### Azure App Registration Information

#### Application (client) ID

You should not need to change this setting. It is displayed for informative purposes only.\
_**Note:** this field is modifiable_

#### Client secret

You cannot view the value you have entered here. You can use this field to supply a new secret once yours has expired.

### Azure Authentication

These settings match those displayed on the [Authentication](../authentication-options/) section.

#### Enable Azure Authentication

Enabling this option will display the `Continue with Microsoft 365` button on the login screen. Clicking this will authenticate the User through Microsoft Azure. The User will only be authenticated if they are a member of one of the synchronised groups.

#### Use Azure Authentication by Default

Enabling this option will attempt to authenticate all users through Microsoft Azure.

{% hint style="info" %}
### Top Tip!

To cancel the automatic authentication temporarily, add `?logout` to the end of the login page's URL. e.g. `http://webapps.local/login?logout`
{% endhint %}

### Map Azure Groups to WebApps Groups

Each of your WebApps Groups will be displayed alongside a list of unused Groups found in your Azure directory.

When you map an Azure Group to a WebApps Group, all members of the Azure Group will be created, if they do not already exist in WebApps, and made to be members of the mapped WebApps Group.&#x20;

{% hint style="success" %}
The groups will be applied top down, with the exception of Administrators
{% endhint %}

### Azure Synchronisation Status

This section displays the last synced time for Microsoft Azure. You have the option here to manually start a sync by clicking on the `Sync Now` button.

If you find that Azure does not sync every 30 minutes as expected, ensure you have setup the [Scheduled Task](../../installation/installation.md#create-a-scheduled-task-to-run-the-webapps-tasks-once-every-minute) for WebApps correctly.
