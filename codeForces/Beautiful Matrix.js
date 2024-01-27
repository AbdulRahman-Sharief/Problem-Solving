var matrix = [];
var row = 0;
var col = 0;
var moves = 0;
for (var i = 0; i < 5; i++) {
    matrix.push(readline().split(' ').map(x => parseInt(x)));
}

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        if (matrix[i][j] === 1) {
            row = i + 1;
            col = j + 1;
        }
    }
}

for (var i = 0; i < 2; i++) {
    if (row !== 3 || col !== 3) {
        if (row < 3) {
            var temp = matrix[row];
            matrix[row] = matrix[row + 1];
            matrix[row + 1] = temp;
            moves++;
            row++;
            // [matrix[row],matrix[row+1]]=[matrix[row+1],matrix[row]];
        } else if (row > 3) {
            var temp = matrix[row];
            matrix[row] = matrix[row - 1];
            matrix[row - 1] = temp;
            moves++;
            row--;
        }
        if (col < 3) {
            var temp = matrix[col];
            matrix[col] = matrix[col + 1];
            matrix[col + 1] = temp;
            moves++;
            col++;
            // [matrix[col],matrix[col+1]]=[matrix[col+1],matrix[col]];
        } else if (col > 3) {
            var temp = matrix[col];
            matrix[col] = matrix[col - 1];
            matrix[col - 1] = temp;
            moves++;
            col--;
        }

    }
}



print(moves);



// 0 0 0 1 0
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 0 0 0