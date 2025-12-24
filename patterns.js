
// *****
// *****
// *****
// *****
// *****
function printStars() {
    var size = 5;
    var stars = "*".repeat(size);
    for (let i = 0; i < size; i++) {
        console.log(stars);
    }
}

// *
// **
// ***
// ****
// *****

function printStars() {
    var starString = "*";
    var height = 5;

    for (var i = 1; i <= height; i++) {
        console.log(starString.repeat(i));
    }
}

// 1
// 12
// 123
// 1234
// 12345

function printNumbers() {
    let starString = "";
    var height = 5;

    for (var i = 1; i <= height; i++) {
        starString = starString + i;
        console.log(starString);
    }
}

// 1
// 22
// 333
// 4444
// 55555

function printNumbers() {
    var numStr = '';
    for (var i = 1; i <= 5; i++) {
        numStr = String(i).repeat(i);
        console.log(numStr);
    }
}

// *****
// ****
// ***
// **
// *

function printStr() {
    for (var i = 5; i >= 0; i--) {
        console.log("*".repeat(i));
    }
}