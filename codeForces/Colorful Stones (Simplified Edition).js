var stones = readline().split('');
var instructions = readline().split('');

var pointer = 0;
for (var i = 0; i < instructions.length; i++) {
    if (instructions[i] === stones[pointer]) {
        pointer++;
    }
}

print(pointer + 1);