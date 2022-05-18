/*\
title: $:/plugins/brockdyer/kingdoms-and-warfare/modules/macros/link-field.js
type: application/javascript
module-type: macro

Macro to create a link to a tiddler given by the field of a tiddler.
\*/

(function() {

    exports.name = "kw.link-field";
    exports.params = [
        {name: "fieldValue"}
    ];
    exports.run = function(fieldValue) {
        return "<$link to=\"" + fieldValue + "\">" + fieldValue + "</$link>";
    };
})();