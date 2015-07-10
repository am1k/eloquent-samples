/**
 * Created by v.bogoroditskiy on 7/8/2015.
 */

var specialForms = require('../specialForms/specialForms');

function evaluate(expr, env) {
    switch(expr.type) {
        case "value":
            return expr.value;

        case "word":
            if (expr.name in env)
                return env[expr.name];
            else
                throw new ReferenceError("Undefined variable: " + expr.name);
        case "apply":
            if (expr.operator.type == "word" &&
                expr.operator.name in specialForms)
                return specialForms[expr.operator.name](expr.args,
                    env);
            var op = evaluate(expr.operator, env);
            if (typeof op != "function")
                throw new TypeError("Applying a non-function.");
            return op.apply(null, expr.args.map(function(arg) {
                return evaluate(arg, env);
            }));
    }
}

module.exports = evaluate;