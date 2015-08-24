InputNumbers
=========
A tiny jQuery plugin which enables the input elements accept only numbers.

Usage
-----------
The plugin by default runs on all the elements which have a ```inp-num``` class associated with them.

* If you wish to run the plugin on the body element
```
$('body').numSanitize();
```
* or on specific textareas with a ```my-custom-class-name```
```
$('textarea').numSanitize({
  klass: 'my-custom-class-name'
});
```

License
-----------
AtomJ is released under the [MIT License](http://www.opensource.org/licenses/MIT).
