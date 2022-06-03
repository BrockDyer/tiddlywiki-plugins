/*\
title: $:/plugins/brockdyer/kingdoms-and-warfare/modules/macros/lookup.js
type: application/javascript
module-type: macro

Macro to perform value lookups.
\*/

(function() {

    exports.name = "kw.lookup";
    exports.params = [
        {name: "key"},
        {name: "file", default: "_lingo"},
        {name: "type", default: "dict"}
    ];
    exports.run = function(key, file, type) {
        const prefix = "$:/plugins/brockdyer/kingdoms-and-warfare/files/";
        var output = "";
        switch (type) {
            case "multids":
                output = "{{" + prefix + file + "/" + key + "}}";
                break;

            case "dict":
            default:
                output = "{{" + prefix + file + "##" + key + "}}";
                break;
        }

        return output;
    };
})();