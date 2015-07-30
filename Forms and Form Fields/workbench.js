/**
 * Created by v.bogoroditskiy on 7/29/2015.
 */

document.getElementById("button").addEventListener("click", function() {
    var code = document.getElementById("code").value;
    var output = document.getElementById("output");
    try {
        var result = new Function(code)();
        output.innerText = String(result);
    } catch(e) {
        output.innerText = "Error" + e
    }
});