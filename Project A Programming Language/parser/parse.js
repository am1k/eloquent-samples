/**
 * Created by v.bogoroditskiy on 7/9/2015.
 */

var parseExpression = require('./parseExpression'),
    skipSpace = require('./skipSpace');

function parse(program) {
    if (isArray(program) || isObject(program) || isNumber(program) || program === null || program === undefined) {
        return false;
    }
    var result = parseExpression(program);
    if (skipSpace(result.rest).length > 0)
        throw new SyntaxError("Unexpected text after program");
    return result.expr;
}

function isArray(obj) {
    return Object.prototype.toString.call(obj).toUpperCase() === '[OBJECT ARRAY]';
}

function isObject(obj) {
    return Object.prototype.toString.call(obj).toUpperCase() === '[OBJECT OBJECT]';
}

function isNumber(obj) {
    return Object.prototype.toString.call(obj).toUpperCase() === '[OBJECT NUMBER]';
}

module.exports = parse;