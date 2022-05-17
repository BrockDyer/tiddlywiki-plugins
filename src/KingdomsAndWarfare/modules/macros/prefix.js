/*\
title: $:/plugins/brockdyer/kingdoms-and-warfare/modules/macros/prefix.js
type: application/javascript
module-type: macro

Macro to return the plugin prefix for tiddlers
\*/

(function() {
    /*
    Information about this macro
    */

    exports.name = "tw-kw.prefix";
    exports.params = [];
    exports.run = function() {
        return "$:/plugins/brockdyer/tw-kingdoms-and-warfare/";
    };
})();