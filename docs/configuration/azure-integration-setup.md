---
title: Microsoft Azure Integration
sidebar_label: Setup
---

## Requirements
- SSL (https) access to WebApps
- Active Azure Subscription

## 1. Create an App Registration
1. Login to the Azure Portal and select [Azure Active Directory](https://aad.portal.azure.com)
2. On the left-hand column, select `App registrations`
3. Click the `New registration` button on the toolbar
4. Name your application (we suggest `WebApps`)
6. Select the option: `Accounts in this organizational directory only ({tenant name} only - Single tenant)`
7. Leave the `Redirect URI (optional)` field empty
8. Click the `Register` button

## 2. Configure the App Registration
1. Open the App registration you created above
2. On the left-hand column, select `Authentication`
3. Click the `Add a platform` button
4. In the flyout, select the `Web` button
5. In the `Redirect URIs` field, enter `https://webapps.local/login/oauth2/azure/callback`
6. Ensure the `Access tokens (used for implicit flows)` checkbox is ticked
7. Click the `Configure` button
8. In the newly appeared `Web` section, click the `Add URI` button
9. In the new box, enter `https://webapps.local/graph/callback/register`
10. Ensure the green checkmark appears and click the `Save` button on the top toolbar

## 3. Add the required API permissions
1. Open the App registration you created above
2. On the left-hand column, select `API permissions`
3. Click the on the button `Add a permission`
4. In the flyout, select the `Microsoft Graph` button
5. Select the option `Application permissions`
6. Select the options for `User.Read`, `User.Read.All`, `Group.Read.All` and `GroupMember.Read.All`
7. Click the `Add permissions` button
8. Once the permissions have appeared in the list of App registration permissions, click on the `Grant admin consent for {tenant name}` button
9. Click `Yes` when prompted

## 4. Retrieve Application (client) ID and Client Secret values
1. Open the App registration you created above
2. On the left-hand column, select `Overview`
3. Note the value listed under `Application (client) ID`
4. On the left-hand column, select `Certificates & secrets`
5. Under the heading `Client secrets`, click the button `New client secret`
6. Enter a meaningful description (we suggest `WebApps Secret`)
7. Select a suitable expiry length (you will need to update WebApps with the new secret once this one expires)
8. Click the `Add` button
9. Make a note of the `Value` option for the new secret. (**Important:** This value will only display once!)

## 5. Configure WebApps
1. In WebApps Settings, navigate to the `Microsoft Azure Integration` section
2. Where prompted, provide the `Application (client) ID` and `Client secret` you generated above
3. Click on the `Get Started` that appears
4. Follow any Microsoft prompts to grant access for WebApps to your App registration
5. You will return to the WebApps `Microsoft Azure Integration` section once complete
