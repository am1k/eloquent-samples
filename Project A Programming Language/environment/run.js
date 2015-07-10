/**
 * Created by v.bogoroditskiy on 7/10/2015.
 */

var topEnv = require('./topEnv'),
    evaluate = require('../evaluator/evaluator'),
    parse = require('../parser/parse');

function run() {
    var env = Object.create(topEnv);
    var program = Array.prototype.slice
        .call(arguments, 0).join("\n");
    return evaluate(parse(program), env);
}

module.exports = run;