var arr = readline().split(' ').map(Number);
var n = arr[0];
var amount = arr[1];
var queue = [];
var distress = 0;
for (var i = 0; i < n; i++) {
    queue.push(readline().split(' '))
}
for (var i = 0; i < queue.length; i++) {
    if (queue[i][0] === '+') {
        amount += +queue[i][1]
    } else if (queue[i][0] === '-') {
        if (+queue[i][1] <= amount) {
            amount -= +queue[i][1];
        } else if (+queue[i][1] > amount) {
            distress++;
        }
    }
}

print(`${amount} ${distress}`)