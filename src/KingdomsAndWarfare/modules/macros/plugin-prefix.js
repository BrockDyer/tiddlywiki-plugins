/*\
title: $:/plugins/brockdyer/kingdoms-and-warfare/modules/macros/plugin-prefix.js
type: application/javascript
module-type: macro

Macro to return the plugin prefix for tiddlers
\*/

(function() {
    /*
    Information about this macro
    */

    exports.name = "kw.plugin-prefix";
    exports.params = [
        {name: "path", default: ""}
    ];
    exports.run = function(path) {
        return "$:/plugins/brockdyer/kingdoms-and-warfare/" + path;
    };
})();