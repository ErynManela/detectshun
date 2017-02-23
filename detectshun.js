
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'bowser'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('bowser'));
    } else {
        // Browser globals
        factory((root.detectshun = {}), root.bowser);
    }
}(this, function (exports, bowser) {


    var detectshun = {
        feature: function(needs, callback) {
            var supported = document.getElementsByTagName('html')[0].className.split(/\s+/);
            var score = 0;

            for (var i = 0; i < needs.length; i++) {
                var has = supported.indexOf(needs[i]);
                if (has != -1) {
                    score++;
                }
            }

            if (score < 1) {
                console.log("WARNING: detectshun requires modernizr 2.x or higher to be included in your project for feature checks to work");
                callback(false);
            } else {
                if (score == needs.length) {
                    callback(true);
                } else {
                    callback(false);
                }
            }
        },

        browser: function() {
            var grade = null;

            if(bowser.a) {
                grade = "a";
            } else if(bowser.c) {
                grade = "c";
            } else {
                grade = "x";
            }

            return {
                name: bowser.name,
                version: bowser.version,
                grade: grade,
                mobile: bowser.mobile || false,
                tablet: bowser.tablet || false,
                ios: bowser.ios || false,
                android: bowser.android || false,
                bowser: bowser
            };
        }
    };

    // attach properties to the exports object to define
    // the exported module properties.
    exports = detectshun;
}));