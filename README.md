CssRule, a cross-browser library for programmatically adding CSS rules
========

Why ?
-----
Sometimes we need an easy way to dynamically add new rules. For example,
we can generate selectors on the fly, but property values as well.

Unfortunately,
it doesn't seem so easy to do in a cross-browser way. That's why
this library was born.

How ?
-----
Just call `cssrule.add(rule)`. `rule` must be a string with a valid
CSS rule, which means selector, properties and values.

An example ?
--------
```javascript
var myColor = "#2565ab";
cssrule.add("div { border-color: " + myColor + "}");
```
