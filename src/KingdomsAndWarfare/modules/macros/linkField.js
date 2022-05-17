/*\
title: $:/plugins/brockdyer/tw-kingdoms-and-warfare/modules/macros/linkField.js
type: application/javascript
module-type: macro

Macro to create a link to a tiddler given by the field of a tiddler.
\*/

(function() {
    /*
    Information about this macro
    */

    exports.name = "tw-kw.link-field";
    exports.params = [
        {name: "fieldValue"}
    ];
    exports.run = function(fieldValue) {
        return "<$link to=" + fieldValue + ">" + fieldValue + "</$link>";
    };
})();