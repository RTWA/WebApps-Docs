### Allow Registrations of WebApps Users
Enabling this setting will show an option to create an account on the WebApps login screen. This account can be used to login without using Micrsoft Azure.

### Default User Group on Registration
This setting is used to control which group newly registered users will be added to.

:::tip Top Tip!
This option will only display if the Allow Registrations for WebApps Users option is enabled!
:::


## Azure Integration
If you have configured your [Microsoft Azure Integration](azure-integration) then two further options will appear. These options are identical to ones listed on the [Microsoft Azure Integration](azure-integration) section. They are only listed here so you can find them more easily.

### Enable Azure Authentication
Enabling this option will display the `Continue with Microsoft 365` button on the login screen. Clicking this will authenticate the User through Microsoft Azure. The User will only be authenticated if they are a member of one of the synchronised groups.

### Use Azure Authentication by Default
Enabling this option will attempt to authenticate all users through Microsoft Azure.

:::tip Top Tip!
To cancel the automatic authentication temporarily, add `?logout` to the end of the login page's URL.
e.g. `http://webapps.local/login?logout`
:::