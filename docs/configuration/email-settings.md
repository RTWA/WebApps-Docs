---
title: Email Settings
---
import { Badge } from 'webapps-react';

WebApps contains an ability to send emails via SMTP. This functionality is available to all Apps as well.
Currently, only the Staff Directory App uses this functionality.

### Email send method <Badge color="indigo-500 dark:bg-indigo-600" pill>From v1.0.3</Badge>
You can now select between using SMTP or Microsoft Azure to send email from WebApps. Please ensure you have [configured Microsoft Azure Integration](./azure-integration-setup.md) before attempting to send mail through Microsoft Azure.

### SMTP Options
If your SMTP server requires authentication to send emails, please specify the credentials in the SMTP Username and SMTP Password fields.
If these fields are left blank, authentication will not be sent to the SMTP server.

### Microsoft Azure Options <Badge color="indigo-500 dark:bg-indigo-600" pill>From v1.0.3</Badge>
Please specify an email address that exists within your Microsoft Azure Active Directory tenant to send the message from.

### Test your configuration
Enter a valid email address into the Sent test to field and click on the Send Test Email button. If your configuration is correct, you should receive a short confirmation email shortly.