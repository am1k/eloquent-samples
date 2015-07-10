/**
 * Created by v.bogoroditskiy on 7/9/2015.
 */

var topEnv = Object.create(null);

topEnv["true"] = true;
topEnv["false"] = false;

["+", "-", "*", "/", "==", "<", ">"].forEach(function(op) {
    topEnv[op] = new Function("a, b", "return a " + op + " b;");
});

topEnv["print"] = function(value) {
    console.log(value);
    return value;
};

topEnv["array"] = function() {
    return Array.prototype.slice.call(arguments, 0)
};

topEnv["length"] = function(array) {
    return array.length;
};

topEnv["element"] = function(array,n) {
    return array[n];
};

module.exports = topEnv;
