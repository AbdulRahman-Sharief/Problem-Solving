var arr = readline().split(' ').map(x => +x);
price = arr[0];
coin = arr[1];
var i = 1;
var change = true;
while (change) {
    if ((price * i) % 10 === 0) {
        change = false;
    } else if ((price * i - coin) % 10 === 0) {
        change = false;
    } else if ((price * i - coin) % 10 !== 0) {
        i++;
    }
}
print(i);