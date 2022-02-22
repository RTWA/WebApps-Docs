# Introduction

Plugins are designed to be easy to develop for people with a small amount of PHP knowledge.

Whilst not required we highly recommend you clone the [Sample Plugin](https://github.com/RTWA/Plugin-Sample) and use that as the base of your new Plugin.\
Use the following command to clone the Plugin into a directory named MyNewPlugin.

```
git clone https://github.com/RTWA/Plugin-Sample.git MyNewPlugin
```

Update the [Plugin manifest](manifest-file.md) and copy the directory into your `<root>/storage/webapps/plugins` directory and you'll be able to activate the Plugin for development in your installation of WebApps.

### Plugin Directory Structure

```
-- MyNewPlugin
 |- include
 | |- _html.php
 | └- _style.css
 |- releases
 |- plugin.json (The Manifest File)
 └- Plugin.php (The Class File)
```
