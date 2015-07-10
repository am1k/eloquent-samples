/**
 * Created by v.bogoroditskiy on 7/9/2015.
 */

var parseExpression = require('./parseExpression'),
    skipSpace = require('./skipSpace');

function parse(program) {
    var result = parseExpression(program);
    if (skipSpace(result.rest).length > 0)
        throw new SyntaxError("Unexpected text after program");
    return result.expr;
}

module.exports = parse;