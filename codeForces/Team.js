var n = parseInt(readline());
var solutions = [];
var noOfProblems = 0;
for (var i = 1; i <= n; i++) {
    solutions.push(readline().split(' ').map(x => parseInt(x)));
}
for (var i = 0; i < solutions.length; i++) {
    var ones = 0;
    var zeros = 0;
    for (var k = 0; k < 3; k++) {
        if (solutions[i][k] === 1) {
            ones++
        } else if (solutions[i][k] === 0) {
            zeros++
        };
    }
    if (ones === 2 || ones === 3) {
        noOfProblems++
    };
}
print(noOfProblems);