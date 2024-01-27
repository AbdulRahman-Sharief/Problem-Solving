var calories = readline().split(' ').map(Number);
var strips = readline().split('').map(Number);

var strip1 = 0, strip2 = 0, strip3 = 0, strip4 = 0;

for (var i = 0; i < strips.length; i++) {
    if (strips[i] === 1) {
        strip1++;
    } else if (strips[i] === 2) {
        strip2++;
    } else if (strips[i] === 3) {
        strip3++;
    } else if (strips[i] === 4) {
        strip4++;
    }
}
var totalCalories = strip1 * calories[0] + strip2 * calories[1] + strip3 * calories[2] + strip4 * calories[3];
print(totalCalories);