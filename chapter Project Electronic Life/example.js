//GLobal object
var MYAPP = {};
//Constructors
MYAPP.Parent = function(){};
MYAPP.Parent.prototype.test = function() {
    return 'Return prototype "test" from Parent';
};
var myParent = new MYAPP.Parent();
console.log(myParent.test());