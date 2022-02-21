---
title: Sample Data
---

WebApps has an option to install Sample Data. This option is available to both developers and standard users of WebApps.

The Sample Data can be installed via the installation wizard or with the [Developer Command `webapps:sample-data`](developer-commands#webappssample-data).

### Users
The sample data will initially create a User in the group `Administrators` with the username `administrator` and the password set to `password`.

The sample data will then continue to create an additional **100** users, all with the password set to `password`. These users have a 30% chance that they will be disabled.

### Blocks
The sample data will then create **1000** Blocks using the `Sample` Plugin, which will be downloaded and installed if it is not present in the Plugins directory.

The created Blocks will then be assigned to one of the new Users (including the Administrator User) and will be created with anywhere between 0 and 1000 views on them over the course of the previous 3 months.