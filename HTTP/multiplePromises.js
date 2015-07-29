/**
 * Created by v.bogoroditskiy on 7/28/2015.
 */

function all(promises) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open("GET", promises, true);
        req.addEventListener("load", function() {
            if (req.status < 400)
                resolve(req.responseText);
            else
                reject(new Error("Request failed: " + req.statusText));
        });
        req.addEventListener("error", function() {
            reject(new Error("Network error"));
        });
        req.send(null);
    });
}


