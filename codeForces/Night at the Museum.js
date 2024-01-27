var str = readline().split('');
var alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

var pointer = 0;
var steps = 0;
var indexOfLetter = 0;
for (var i = 0; i < str.length; i++) {
    // console.log(pointer);
    indexOfLetter = alphabet.indexOf(str[i]);
    if (Math.abs(indexOfLetter - pointer) <= 12) {
        // move in the direction of the sign.
        if (Math.sign((indexOfLetter - pointer)) === -1) {
            steps += Math.abs(indexOfLetter - pointer);
            pointer = indexOfLetter;
        } else if (Math.sign((indexOfLetter - pointer)) === 1) {
            steps += ((indexOfLetter - pointer));
            pointer = indexOfLetter;
        }
    } else if (Math.abs(indexOfLetter - pointer) >= 13) {
        // move in the opposite direction of the sign.
        if (Math.sign((indexOfLetter - pointer)) === 1) {
            steps += ((pointer - indexOfLetter) + 26);
            pointer = indexOfLetter;
        } else if (Math.sign((indexOfLetter - pointer)) === -1) {
            steps += (indexOfLetter - pointer + 26);
            pointer = indexOfLetter;
        }
    }
    // else if (Math.abs(indexOfLetter - pointer) == 13 || Math.abs(indexOfLetter - pointer) == 12) {
    // steps += Math.abs(indexOfLetter - pointer);
    // pointer = indexOfLetter;
    // }

    // console.log(indexOfLetter);
    // console.log(steps);
    // console.log('==============')

}
print(steps);

// + sign means you move from beginning to end.
// - sign means you move from end to beginning.

//zeus
// p=0
//['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

