Create a `_html.php` file in the `includes` directory of your Plugin and ensure you have included it in your [Output Function](class-file#the-output-function).

The values of your Plugin `$option`s available in the `$this->settings` array.

You can use all standard HTML and PHP code in this file as it will be evalutated before being output by your Plugin.


### Repeater Fields
If you are using a [Repeater](available-fields#repeater) field, you can use a foreach loop to display each option.

For example
```php title=_html.php
<?php $i = 1;
    foreach ($this->settings['repeater_field'] as $field) {
        echo '<p id="'.$i.'" class="items">'.$field['value'].'</p>';
        $i ++;
    }
?>
```