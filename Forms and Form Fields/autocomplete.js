/**
 * Created by v.bogoroditskiy on 7/29/2015.
 */

var terms = [];
for (var name in window)
    terms.push(name);

var textField = document.querySelector("#field");
var suggestions = document.querySelector("#suggestions");

textField.addEventListener("input", function() {
    if (textField.value.length === 0) {
        suggestions.style.display = "none";
    } else {
        suggestions.style.display = "block";
    }
    var comparison = terms.filter(function(term){
        return term.indexOf(textField.value) == 0;
    });
    suggestions.textContent = "";
    comparison.slice(0, 10).forEach(function(term) {
        var node = document.createElement("div");
        node.textContent = term;
        node.addEventListener("click", function() {
            textField.value = term;
            suggestions.textContent = "";
        });
        suggestions.appendChild(node);
    });

});