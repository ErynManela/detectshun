# detectshun
Simple javascript feature &amp; browser detection wrapper. Relies on ded/Bowser for detection support and optionally on Modernizr for feature detection support.
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
var browserIsMobile = detectshun.browser().mobile; // i.e. true
var browserIsTablet = detectshun.browser().tablet; // i.e. false
var browserIsiOS = detectshun.browser().ios; // i.e. true
var browserIsAndroid = detectshun.browser().android; // i.e. false
var bowser = detectshun.browser().bowser; // Get the regular old bowser object
```


