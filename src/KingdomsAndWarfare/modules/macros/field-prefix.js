/*\
title: $:/plugins/brockdyer/kingdoms-and-warfare/modules/macros/field-prefix.js
type: application/javascript
module-type: macro

Macro to return the prefix for tiddler fields
\*/

(function() {

    exports.name = "kw.party-sheet-prefix";
    exports.params = [];
    exports.run = function() {
        return "kw.ps.";
    };
})();