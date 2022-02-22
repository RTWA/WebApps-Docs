A set of predefined fields are available to your Plugin, they are each described below.

You declare which type of field you require per option by using the `type` key.

## Text
The most common type of Field, a simple `<input />` element.

Using this field requires the following options to be set.

**`label`**<br />
The label to display for the field.

**`required`** (boolean/optional)<br />
Whether to apply the `required` attribute to the `<input />` or not.

**`maxLength`** (optional)<br />
The maxLength attribute to apply to the `<input />` field.


## Select
Similar to the Text field, this will display a simple `<select />` element.

Using this field required the follow options to be set.

**`label`**<br />
The label to display for the field.

**`options`** (array)<br />
An array of options to display, these must be `'value' => 'label'`.


## Switch
Similar to the previous two options, this will display a `<input type="checkbox" />` that has been styled with a [`<Switch />` component](../react-components/components/switch).

Using this field required the follow options to be set.

**`label`**<br />
The label to display for the field.


## Image
This option will present an option to allow the user to upload an image or enter the URL of an image to be used.

There are no required options for this field.

The following dataset will be available for an `Image` field.

```php
'your_image_field' => [
    'src' => '',
    'text' => '',
    'class' => 'hidden',
    'label' => 'Get from URL:',
    'readonly' => false
]
```
You must ensure that your [`$new` property](class-file#the-new-property) returns the empty array as displayed above.


## Repeater
This is a field with an unlimited number of iterations. It will contain a collection of fields per iteration.

Using this field required the follow options to be set.

**`label`**<br />
The label to display for the field.

**`ref`**<br />
The option field whose value will be used to identify the repeater.

**`options`** (array)<br />
An array of fields to display in each repeater iteration. This array should match the [`$options` property](class-file#the-options-property) format.


## Custom Field

Coming soon...