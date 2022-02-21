---
title: What is WebApps?
sidebar_label: Introduction
slug: /
---

WebApps is a Plugin driven Block ('widget') creator. It can be used as a flexible addition to any CMS, VLE or SharePoint site that allows for HTML input.

Plugins have configurable options which can be viewed through a simple `<iframe />` code. This provides great flexibility with an unlimited number of possibilities.

Apps are complex Plugins. They allow the developer to produce a deeper level of customisation options, whilst still producing similar `<iframe />` code to embed into your site. Some Apps may also produce an endpoint, in either JSON or XML, which can be used for displaying information in a variety of ways, including on Digital Signage.

In order to get started with WebApps, make sure you have downloaded the [latest release](https://github.com/RTWA/WebApps/releases/latest) from GitHub.

WebApps is open source software which means all of our source code is availble for you to view, scrutinise, correct and submit!
We are open to Pull Requests for our software or our documentation.

:::note This is web-based software
There are no installation or executable files (aka no .EXE or .MSI files), it must be run on a Web Server accessed through a web browser. 
It can run on a Linux distibution, macOS or Windows, however you are expected to have a decent working knowledge of setting up a web server on a LAMP (or equivalent IIS) stack.
:::

:::info File Structure
WebApps is built using Laravel, it follows a standard Laravel MVC file structure. Within the WebApps installation directory, you'll see a `public` folder. This should be set as your website root.
:::


### Security 

WebApps has been built with security in mind. Laravel utilises bcrypt to handle passwords, which is an adaptive hash function based on the Blowfish symmetric block cipher cryptographic algorithm.

We highly recommend the use of SSL for running WebApps.

:::danger IMPORTANT
Never leave WebApps running in debug mode. Debug mode can be enormously useful if you are developing your own Plugins or Apps, or if you are contributing to our code base. However, you should always disable debug mode on a live website once you've resolved your issue.
:::