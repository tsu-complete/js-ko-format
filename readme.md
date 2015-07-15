
js-ko-format
===

> data format binding for knockout

Usage
---

```html
<span data-bind="format:{raw:some_number,format:'(0,0.00)'}">
</span>

<span data-bind="format:{raw:some_date,format:'MM.YYYY'}">
</span>

<span data-bind="format:{raw:some_date,format:'0',cast:Number}">
</span>

<span data-bind="format:{raw:some_object,format:'({{status}}!)'}">
```

Vendor
---

### Numeral formatting

[Numeral](https://github.com/adamwdraper/Numeral-js)

### Date formatting

[datef](https://github.com/hogart/datef)

### String formatting

[Mustache](https://github.com/janl/mustache.js)

Future
---

Plan to support input items, focus places unformatted data, blur reformats.

