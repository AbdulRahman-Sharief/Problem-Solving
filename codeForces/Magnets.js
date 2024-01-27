var n = parseInt(readline());
var arr = [];
var noOfGroups = 0;
for (var i = 0; i < n; i++) {
    arr[i] = parseInt(readline());
}
for (var i = 0; i < arr.length; i++) {
    // if(arr[i] == undefined) break;
    if (arr[i] !== arr[i + 1]) {
        noOfGroups++;
    }
}
print(noOfGroups);