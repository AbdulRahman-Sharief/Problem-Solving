var n = +readline();
var arr = [];
for (var i = 0; i < n; i++) {
  arr.push(readline());
}

var x = 0;
for (var j = 0; j < arr.length; j++) {
  if (arr[j] === "++X" || arr[j] === "X++") x++;
  if (arr[j] === "--X" || arr[j] === "X--") x--;
}
print(x);
