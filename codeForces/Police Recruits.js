var n = parseInt(readline());
var arr = readline().split(' ').map(x => +x);
var count = 0;
var sum = 0;
for (var i = 0; i < n; i++) {
    if (arr[i] < 0 && (arr[i - 1] < 0 || arr[i - 1] === undefined || arr[i - 1] === 0)) {
        count++;
    } else if (arr[i] < 0 && arr[i - 1] > 0) {
        sum = arr[i] + arr[i - 1];
        arr[i] = sum;
    } else if (arr[i] > 0) {
        arr[i + 1] += arr[i];
        arr[i] = 0;
    }
}
print(count);