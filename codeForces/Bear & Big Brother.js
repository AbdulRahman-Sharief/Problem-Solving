var arr = readline().split(' ').map(x => parseInt(x));
var a = arr[0];
var b = arr[1];

print(Math.floor((Math.log(b / a) / Math.log(3 / 2)) + 1));