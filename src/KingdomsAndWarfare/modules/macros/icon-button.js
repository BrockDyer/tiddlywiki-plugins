/*\
title: $:/plugins/brockdyer/kingdoms-and-warfare/modules/macros/icon-button.js
type: application/javascript
module-type: macro

Macro to create a button with an icon.
\*/

(function() {

    exports.name = "kw.icon-button";
    exports.params = [
        {name: "showButtonFilter"},
        {name: "actions"},
        {name: "tooltip"},
        {name: "aria"},
        {name: "image"},
        {name: "text"},
        {name: "path", default: "$:/plugins/brockdyer/kingdoms-and-warfare/images/"},
        {name: "btnClass", default: "<<tv-config-toolbar-class>>"}
    ];
    exports.run = function(showButtonFilter, actions, tooltip, aria,
        image, text, path, btnClass) {

        var output = "<$list filter=\"" + showButtonFilter + "\">" +
            "<$button actions=\"\"\"" + actions + "\"\"\" tooltip=\"" + tooltip + "\" aria-label=\"" + aria + "\" class=" + btnClass + ">" +
                "<$list filter=\"[<tv-config-toolbar-icons>prefix[yes]]\">" +
                    "{{" + path + image + "}}" +
                "</$list>" +
                "<$list filter=\"[<tv-config-toolbar-text>prefix[yes]]\" >" +
                    "<span class=\"tc-btn-text\"><$text text=\"" + text + "\"/></span>" +
                "</$list>" +
            "</$button>" +
        "</$list>";

        return output;
    };
})();