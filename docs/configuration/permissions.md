---
title: Permissions
---

Each permission option can be toggled for all user groups. Installing or Activating Apps will add or remove permission entries from the
Apps Options tab.

Below is a list of the WebApps core permissions and what they do.

### Administrative Options Tab

**Access Administrative Settings**<br />
This permission controls access into the WebApps Settings page.<br />
_**Note:** this permission cannot be denied for users in the Administrators group._

### Blocks Options Tab
_**Note:** these permissions do not affect embedded Blocks, as they are viewable by unauthenticated users_

**View Own Blocks**<br />
This permission controls whether a user can see (and therefore use) Blocks they have created.

**Create New Blocks**<br />
This permission controls whether a user can create new Blocks

**View Other Users Blocks**<br />
This permission controls whether a user can view (and therefore edit) Blocks created by another user.<br />

:::info Worth Knowing...
If this permission is set, you can view other users Blocks by going to `http://webapps.local/blocks/user/username`
where `username` is the WebApps username of the user.
:::

### Apps Options Tab

**Use Active Apps**<br />
This permission controls access into **all** activated Apps.<br />
_**Note:** activated Apps may include additional permissions for more granular control. See the App's documentation for information._
