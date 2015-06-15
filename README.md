# detectshun
Simple javascript feature &amp; browser detection wrapper. Relies on Modernizr for feature detection support.

Feature Detection
---

```js
detectshun.feature([
    "js",
    "rgba",
    "canvas",
    "canvastext",
    "opacity",
    "draganddrop",
    "fontface"

], function(status) {
    if(status) {
        alert('This browser supports all of the features required');
    } else {
        alert('Your browser sucks...');
    }
});
```


Browser Detection
---

```js
var browserName = detectshun.browser().name; // i.e. "Chrome"
var browserVersion = detectshun.browser().version; // i.e. "43.0"
var browserGrade = detectshun.browser().grade; // i.e. "a"
```


Attribution
---

The browser detection portion of this wrapper is just a minified copy of bowser (https://github.com/ded/bowser). I will most likely clone bowser right into this repo as a dependency instead of the hackish way I am including it now (some day).

