var n = parseInt(readline());

var arr = readline().split(' ').map(Number);

var start = 0;
var end = n - 1;

var Sereja = 0;
var Dima = 0;

var isDimaTurn = false;

while (start <= end) {
    if (isDimaTurn) {
        if (arr[start] > arr[end]) {
            Dima += arr[start];
            start += 1;
        } else {
            Dima += arr[end];
            end -= 1;
        }
    } else {
        if (arr[start] > arr[end]) {
            Sereja += arr[start];
            start += 1;
        } else {
            Sereja += arr[end];
            end -= 1;
        }

    }
    isDimaTurn = !isDimaTurn;
}

print(Sereja + " " + Dima);