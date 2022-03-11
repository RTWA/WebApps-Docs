# Microsoft Azure Integration

{% hint style="info" %}
To use this option, you must have already configured Microsoft Azure Intgeration in WebApps.

See [here](https://docs.getwebapps.uk/configuration/microsoft-azure-integration) for more information.
{% endhint %}

### Add Azure Group to Sync

To sync your Azure groups with Staff Directory, start typing the name of a group you would like to sync. When the group appears in the suggested options, click it and it will be added the box below.

Next the Staff Directory App syncs with Azure, all members of this group or nested groups will be created or updated in Staff Directory.

### Create Departments from User properties

By toggling this option, the department for each user in Azure will be read and matched to a Staff Directory department. If the department does not exist in Staff Directory, it will be created automatically.

{% hint style="info" %}
To create child departments, the user's Azure department should be in the following format: `Parent Department - Child Department`
{% endhint %}

### Technical Contact Email Address

If Staff Directory continually fails to sync with Microsoft Azure, a notification will be sent to this email address.

### Last Synced

This field will show you when Staff Directory last synced with Microsoft Azure and provides an option to initiate a new sync.
