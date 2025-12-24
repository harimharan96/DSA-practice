
// *****
// *****
// *****
// *****
// *****
function printStars1() {
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

function printStars2() {
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

function printNumbers3() {
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

function printNumbers4() {
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

function printStr5() {
    for (var i = 5; i >= 0; i--) {
        console.log("*".repeat(i));
    }
}

// 12345
// 1234
// 123
// 12
// 1

function printStr6() {
    var str = '';
    for (var i = 5; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            str += String(j);
        }
        console.log(str);
        str = '';
    }
}

//     *
//    ***
//   *****
//  *******
// *********

function printStr7() {
    var str = ' ';
    for (var i = 1; i <= 5; i++) {
        console.log(str.repeat(5 - i) + "*".repeat(i + (i - 1)));
    }
}

// *********
//  *******
//   *****
//    ***
//     *

function printStr8() {
    var str = ' ';
    for (var i = 0; i < 5; i++) {
        console.log(str.repeat(i) + "*".repeat(5 - i + (4 - i)));
    }
}

//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

function printStr9() {
    var str = ' ';
    for (var i = 0; i < 5; i++) {
        console.log(str.repeat(5 - i - 1) + "*".repeat(i + 1 + i));
    }
    for (var j = 0; j < 5; j++) {
        console.log(str.repeat(j) + "*".repeat(5 - j + (4 - j)));
    }
}

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

function printStr10() {
    var str = '*';
    var n = 5;
    for (var i = 1; i <= n; i++) {
        console.log(str.repeat(i));
    }
    for (var j = n - 1; j > 0; j--) {
        console.log(str.repeat(j));
    }
}

// 1
// 01
// 101
// 0101
// 10101

function printStr11() {
    var str = '';
    var bina = '0';
    var n = 5;
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= i; j++) {
            bina == '1' ? bina = '0' : bina = '1';
            str = str + bina;
        }
        console.log(str);
        str[0] == '1' ? bina = '1' : bina = '0';
        str = '';
    }
}