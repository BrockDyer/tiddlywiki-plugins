/*\
title: $:/plugins/brockdyer/kingdoms-and-warfare/modules/macros/organization/statblock.js
type: application/javascript
module-type: macro

Macro to generate the statblock for the organization
\*/

/**
 * Capitalizes first letters of words in string.
 * @param {string} str String to be modified
 * @param {boolean=false} lower Whether all other letters should be lowercased
 * @return {string}
 * @usage
 *   capitalize('fix this string');     // -> 'Fix This String'
 *   capitalize('javaSCrIPT');          // -> 'JavaSCrIPT'
 *   capitalize('javaSCrIPT', true);    // -> 'Javascript'
 */
 const capitalize = (str, lower = false) =>
 (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
;

function generateCell(i, data, prefix, file) {
    if (i < data.length) {
        const item = data[i];
        file = "DevelopmentPoints/" + file;
        const value = "<$macrocall $name=\"kw.lookup\" key={{!!" + prefix + item + "}} file=\"" + file + "\" />";
        return "<td><span style=\"font-weight: bold;\">" + capitalize(item, true) + "</span>: " + value + "</td>";
    }

    return "<td></td>";
}

(function() {

    exports.name = "kw.org.statblock";
    exports.params = [
        {name: "skills"},
        {name: "defenses"}
    ];
    exports.run = function(skills, defenses) {
        skills = skills.split(" ");
        defenses = defenses.split(" ");
        
        // console.log({
        //     skills: skills,
        //     defenses: defenses
        // });

        const prefix = "kw.org.base-"
        var i = 0;
        var output = "";
        while (i < skills.length || i < defenses.length) {
            output += "<tr>";

            output += generateCell(i, skills, prefix, "skills");
            output += generateCell(i, defenses, prefix, "defenses");

            output += "</tr>";

            i += 1;
        }
        return output;
    };
})();