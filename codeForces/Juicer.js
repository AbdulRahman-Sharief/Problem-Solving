var arr = readline().split(' ').map(x => +x);
var n = arr[0];
var b = arr[1];
var d = arr[2];
var oranges = readline().split(' ').map(x => +x);
var total = 0;
var empty = 0;
for (var i = 0; i < n; i++) {

    if (oranges[i] <= b) {
        total += oranges[i]
    }
    if (total > d) {
        empty++;
        total = 0
    }
}

print(empty);