"use strict"

var counterPromise = new Promise(function (resolve, reject) {
    setTimeout(function() {
    var i = 0;
    while( i < 1000) {
        console.log(i);
        i++;
    }
    onFinish();
}, 300);
}

counterPromise.then(function(value) {
    console.log(value);
});
console.log("we finished!")