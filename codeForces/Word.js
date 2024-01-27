var word = readline().split('');
var upperCase = 0;
for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
        upperCase++;
    }
}

if (upperCase > (word.length - upperCase)) {
    print(word.join('').toUpperCase())
} else {
    print(word.join('').toLowerCase())
}

