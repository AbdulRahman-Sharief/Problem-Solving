// var arr = readline().split(' ').map(Number);
// var n = arr[0];
// var k = arr[1];
// var password = [];
// var randomLetter = '';
// var NOTkDistinctLetters = true;
// var alphabet = Array(26).fill(1).map((_, i) => String.fromCharCode(97 + i));
// Array.prototype.random = function () {
//     return this[Math.floor((Math.random() * this.length))];
// }
// //generate password array that has length on n.
// function generatePass(n) {
//     for (var i = 0; i < n; i++) {
//         randomLetter = alphabet.random();
//         if (password.length == 0) {
//             password.push(randomLetter);
//         } else {
//             //any two consecutive symbols in the password must be distinct
//             if (randomLetter !== password[i - 1]) {
//                 password[i] = randomLetter;
//             }
//         }
//     }
// }

// function distinct(k, n) {
//     while (NOTkDistinctLetters) {
//         if ([...new Set(password)].length === k) {
//             NOTkDistinctLetters = false;
//             return password
//         } else if ([...new Set(password)].length !== k) {
//             generatePass(n)
//         }
//     }
// }
// print(distinct(k, n).join(''));



var l = readline().split(' ');
var n = l[0];
var k = l[1];
var str = "";
for (var i = 0; i < k; i++) {
    str += String.fromCharCode(97 + i);
}
var b1 = str.length % 2;
for (var i = str.length; i < n; i++) {
    if (str.length % 2 == b1)
        str += String.fromCharCode(97);
    else
        str += String.fromCharCode(98);
}
print(str);