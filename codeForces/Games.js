var n = parseInt(readline());
var arr = [];
var counter = 0;
for (var i = 0; i < n; i++) {
    arr.push(readline().split(' ').map(x => +x));
}
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[i][0] === arr[j][1]) {
            counter++;
        }
    }
}

print(counter);