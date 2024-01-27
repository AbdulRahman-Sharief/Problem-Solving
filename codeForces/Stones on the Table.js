var n = parseInt(readline());
var arr = readline().split('')
var counter = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
        counter++;
    }
}
print(counter);