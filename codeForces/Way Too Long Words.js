var n = +readline();
var words = [];

for (var i = 0; i < n; i++) {
    words.push(readline())
}
for (var i = 0; i < words.length; i++) {
    if (words[i].length > 10) {
        words[i] = `${words[i].split('')[0]}${words[i].split('').length - 2}${words[i].split('')[words[i].split('').length - 1]}`
    }
}
for (var i = 0; i < words.length; i++) {
    print(words[i])
}
