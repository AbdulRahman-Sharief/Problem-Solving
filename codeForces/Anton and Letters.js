var alphabet = new Array(26).fill(1).map((_, i) => String.fromCharCode(97 + i));
var str = readline().split('').filter(x => alphabet.includes(x));

var distinct = [... new Set(str)];

print(distinct.length);