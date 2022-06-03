/*\
title: $:/plugins/brockdyer/kingdoms-and-warfare/modules/macros/development-points.js
type: application/javascript
module-type: macro

Macros to generate tables for development points.
\*/

function generateCell(tiddler, valueTiddler, field, value, idx, hidden, disabled) {
    var hiddenClass = hidden ? "dev-points-hidden" : "";
    disabled = disabled ? "yes" : "no";
    const button =
    "<$button disabled=\"" + disabled + "\" class=\"tc-btn-invisible dev-points-btn " + hiddenClass + "\" set=\"" + tiddler + "!!" + field + "\" setTo=\"" + value + "\">" +
        "{{" + valueTiddler + "##" + idx + "}}" +
    "</$button>";
    const output = button;
    return output;
}

(function() {

    exports.name = "kw.devpoints.generate-row";
    exports.params = [
        {name: "title"},
        {name: "maxDevPoints"},
        {name: "basePoints", default: "0"},
        {name: "devPoints", default: "0"},
        {name: "currentTiddler"},
        {name: "valueTiddler"},
        {name: "hiddenIndices"},
        {name: "availablePoints"}
    ];
    exports.run = function(
        title,
        maxDevPoints,
        basePoints,
        devPoints,
        currentTiddler, 
        valueTiddler,
        hiddenIndices,
        availablePoints,
    ) {
        const field = "kw.ps." + title.toLowerCase() + "-points";
        const rowTitle = title[0].toUpperCase() + title.substring(1);
        hiddenIndices = hiddenIndices.split(/\s+/);

        basePoints = parseInt(basePoints);
        devPoints = parseInt(devPoints);

        // console.log({
        //     title: title,
        //     maxDevPoints: maxDevPoints,
        //     basePoints: basePoints,
        //     devPoints: devPoints,
        //     currentTiddler: currentTiddler,
        //     valueTiddler: valueTiddler,
        //     hiddenIndices: hiddenIndices,
        //     availablePoints: availablePoints
        // });

        const gc = function(idx, disabled=false) {
            var hidden = hiddenIndices.includes(idx.toString());
            if (idx - (basePoints + devPoints) > availablePoints) {
                disabled = true;
            }
            return generateCell(currentTiddler, valueTiddler, field, idx - basePoints, idx, hidden, disabled);
        }

        // Heading
        const th = "<th>" + rowTitle + "</th>";

        // Unselectable elements
        var unselectable = "";
        for (var i = 1; i < basePoints; i++) {
            unselectable += "<td class=\"dp-cell dp-previous\">" + gc(i, true) + "</td>";
        }

        // Previous elements
        var previous = "";
        for (var i = basePoints; i < (basePoints + devPoints); i++) {
            var baseClass = "";
            if (i == basePoints) {
                baseClass = "dp-base";
            }
            previous += "<td class=\"dp-cell dp-previous " + baseClass + "\">" + gc(i) + "</td>";
        }

        // Current selection
        var current = (basePoints + devPoints > 0) ? "<td class=\"dp-cell dp-current\">" + gc(basePoints + devPoints) + "</td>" : "";

        // Remaining elements
        var remaining = ""
        for (var i = (basePoints + devPoints) + 1; i <= maxDevPoints; i++) {
            remaining += "<td class=\"dp-cell dp-remaining\">" + gc(i) + "</td>";
        }
        
        const output = "<tr>" + th + unselectable + previous + current + remaining + "</tr>";
        return output;
    };
})();