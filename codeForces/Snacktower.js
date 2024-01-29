/*
    The idea to solve this problem is to seek whether the biggest remaining snacks has fall on that day or not,
    if the bigger snacks has fall, print them, otherwise print empty line.
    
    We could know the biggest remaining snack by exploiting the fact that the size of the snack given 
    will be always 1..n
*/

var n = parseInt(readline());
var sizes = readline().split(" ").map(Number);
var current_max = n;

var has_fall = []; // hash table containing whether certain size snack has fall or not
var tmp = []; // temp array for printing single line by using print() in js

for (var i = 0; i < n; i++) {
  var size = sizes[i];
  has_fall[size] = 1;

  // exploiting the fact that size will be always 1..n
  while (has_fall[current_max] === 1) {
    tmp.push(current_max);
    current_max--; // we could know the next biggest remaining snack size is this
  }

  print(tmp.join(" "));
  tmp = [];
}
