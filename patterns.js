
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