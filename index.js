
;(function ( factory ) {
    "use strict";

    if ("function" === typeof define && define.amd) {
        define(["knockout", "js-format"], factory);
    } else if ("undefined" !== typeof module) {
        factory(require("knockout"), require("js-format"));
    } else {
        factory(window.ko, window.format);
    }

})(function ( ko, format ) {
    "use strict";

    ko.bindingHandlers.format = {
        "init": function ( element, valueAccessor ) {
            var options = valueAccessor()
            ,   formatter = format.create(options.format, options)
            ;

            ko.utils.setTextContent(element,
                formatter(ko.unwrap(options.raw)));

            if (ko.isObservable(options.raw)) {
                options.raw.subscribe(function ( change ) {
                    ko.utils.setTextContent(element, formatter(change));
                });
            }

            return { "controlsDescendantBindings": true };
        }
    };
    ko.virtualElements.allowedBindings.format = true;

});

