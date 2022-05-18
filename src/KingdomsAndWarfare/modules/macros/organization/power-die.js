/*\
title: $:/plugins/brockdyer/kingdoms-and-warfare/modules/macros/organization/power-die.js
type: application/javascript
module-type: macro

Macro to get the power die for the organization
\*/

(function() {

    exports.name = "kw.org.power-die";
    exports.params = [
        {name: "size"}
    ];
    exports.run = function(size) {
        const output = "{{$:/plugins/brockdyer/kingdoms-and-warfare/files/power-die##" + size + "}}";
        return output;
    };
})();

