/**
 * Created by v.bogoroditskiy on 7/10/2015.
 */

function skipSpace(string) {
    var skippable = string.match(/^(\s|#.*)*/);
    return string.slice(skippable[0].length);
}

module.exports = skipSpace;