The class file is how WebApps knows what your Plugin offers and how to use it.<br />
The class is saved in a file called `Plugin.php` in the root of your Plugin's directory. (Note the uppercase `P`)

## Namespace

The namespace that your Plugin **must** use is `WebApps\Plugin`.

This is defined at the very top of the class file.
```php title=Plugin.php
namepsace WebApps\Plugin;
```

## Class Declaration

Your class should extend the `App\Models\Plugin` class and be named `{slug}_Plugin`.

Example class declaration for the `MyNewPlugin` Plugin:
```php title=Plugin.php
class MyNewPlugin_Plugin extends App\Models\Plugin
```
You could optionally make this line shorter by adding a using statement for the `App\Models\Plugin` class.

## Properties and Constructor
The following public properties must be declared and set in your `__construct` function.
```php title=Plugin.php
public $name;
public $icon;
public $version;
public $author;
```

Your `__construct` function must include an `array` parameter of `$attributes` with a default declaration of `[]`.<br />
The `parent::__construct($attributes)` function must also be called.

An example `__construct` function looks like this:
```php title=Plugin.php
public function __construct(array $attributes = [])
{
    parent::__construct($attributes);
    $plugin = json_decode(file_get_contents(__DIR__ . '/plugin.json'), true);
    $this->name = $plugin['name'];
    $this->icon = $plugin['icon'];
    $this->version = $plugin['version'];
    $this->author = $plugin['author'];
}
```
Whilst not required, we recommend you use the manifest file to set your class properties.

To use a WebApps setting you use `RobTrehy\LaravelApplicationSettings\ApplicationSettings::get('key');` in your constructor (or anywhere else in your Plugin).<br />
Take a look at the Room Booking System Plugin's [class file](https://github.com/RTWA/Plugin-RoomBookingSystem/blob/master/Plugin.php#L26) for an example.

## The Options Property
Another public property that should be declared is `$options`, this should provide an array of fields that should be presented during Block creation with your Plugin.

The available options can be found on the [Available Fields](available-fields) page.

## The New Property
The `$new` public property should be set to an array with default values for each of your available fields (`$options`).

Example:
```php title=Plugin.php
public $new = [
    'message' => '',
    'width' => 5,
    'height' => 5
];
```

### Repeater Fields
If you are using a [Repeater](#) field, you should provide an array of default values for each of the fields options.

## The Preview Property
The `$preview` public property should be a string containing the HTML required to produce the preview of your Plugin.

To set the value of an element, you can apply a `data-val` attribute with the value of `value.{myProperty}`.<br />
For example, `<h1 data-val="value.message" />` would display an `<h1 />` element with the value of the `message` option.

To use the value within an element take, prepend `value.` as before, and wrap the value in `{}` curly braces.<br />
For example `<div class="w-{value.width} h-{value.height}" />` would create a `<div />` element with the classes of your `width` and `height` options, prepended with `w-` and `h-` respectively.

#### Repeater Fields
If you are using a [Repeater](#) field, you need to provide the HTML for each output.<br />
A value of `index` is provided (**not** zero-indexed) which can be used to identitfy each element.

You can also add JavaScript to be evaluated each time a repeater is collapsed or expanded.<br />
Add a key to `$preview` called `repeater`. You **can** use jQuery in this JavaScript.<br />
A value of `repeater` is available for the currently (**zero-indexed**) open repeater (-1 if no repeater is open).

```php title=Plugin.php
public $preview = [
    '{repeater_field}' => [
        'each' => '<p id="{index-1}" class="items" data-val="value.repeater_field_text" />'
    ],
    'repeater' => "$('.items').hide(); $('#'+repeater).show();"
];
```


## The Output Function
The `output` function must be publically declare and accept a `boolean` parameter of `$edit`, with a default value of `false`.<br />
The `$edit` parameter should then be assigned to a `edit` property on the class. For example `$this->edit = $edit;`.

Next you should start an output buffer and require your [HTML Include File](html-include), before cleaning up the code and returning it.

Example of the complete function.
```php title=Plugin.php
public function output($edit = false)
{
    $this->edit = $edit;
    ob_start();
    require(__DIR__.'/include/_html.php');
    $html = str_replace(["\r", "\n", "\t"], '', trim(ob_get_clean()));
    $html = preg_replace('/(\s){2,}/s', '', $html);
    return $html;
}
```

## The Style Function
The `style` function should return any required CSS for your Plugin.

This could be entered directly into your class file as a string, or you could get the contents of a [CSS Include File](css-include).

Example of the function when loading a [CSS Include File](css-include).
```php title=Plugin.php
public function style()
{
    return file_get_contents(__DIR__.'/include/_style.css');
}
```

## The Scripts Function
The `scripts` function should return any required JavaScript for your Plugin.<br />
The `$edit` parameter is also passed to the function and can be used to return different JavaScript when editing a Block compared with viewing it.

This could be entered directly into your class file as a string, or you could get the contents of a [Scripts Include File](scripts-include).

Example of the function when loading a [Scripts Include File](scripts-include).
```php title=Plugin.php
public function scripts($edit = false)
{
    return file_get_contents(__DIR__.'/include/_scripts.js');
}
```