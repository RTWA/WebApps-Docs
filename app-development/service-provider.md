:::note
Your Service Provider must be named `{YourAppSlug}ServiceProvider.php` and the class name should match the filename.

Always ensure the namespace and any using statements have been updated to include your App's slug, rather than `DemoApp`.
:::

### The Namespace property (protected)
This class property should be updated to ensure it contains your App's slug, rather than `DemoApp`. This is used in a few locations in the provider.

### The Boot function
**For the code found under the `// Find files that are required by this app` comment:**

Update the `$folders` array to contain an additional directories you have created.<br />
For example, you may need to add `Commands` or `Mail`. These entries are Case Sensitive!

All files in these directories will be loaded into Laravel for use by your App.

**For the code found under the `// Add the Apps views` comment:**

If your App includes (blade) View files, you should update the second parameter of this function call to your App's slug.

If your App does not include (blade) View files, you should comment (or delete) this line.

###  The Map function
This function calls two additional functions to load your App's routes into Laravel. You can remove any lines if these routes are not used.

#### The Map Web Routes function
If your App requires web routes to be available, include a call to this function in the Map function.<br />
Be sure to update the `prefix` and `require` paths to use your App's slug, rather than `DemoApp`.<br />
Note the paths are Case Sensitive!

#### The Map API Routes function
If your App requires api routes to be available, include a call to this function in the Map function.<br />
Be sure to update the `prefix` and `require` paths to use your App's slug, rather than `DemoApp`.<br />
Note the paths are Case Sensitive!
