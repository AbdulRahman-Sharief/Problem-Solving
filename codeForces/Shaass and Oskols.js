var numberOfLines = readline()
var lines = readline().split(' ').map(Number)
var numberOfShoots = readline()

for (var i = 0; i < numberOfShoots; i++) {
    var shootPositions = readline().split(' ').map(Number)
    var lineIndex = shootPositions[0] - 1
    var index = shootPositions[1]

    var currentNumberOfBirds = lines[lineIndex]

    if (lineIndex - 1 >= 0) lines[lineIndex - 1] += (index - 1)
    if (lineIndex + 1 < lines.length) lines[lineIndex + 1] += currentNumberOfBirds - index
    lines[lineIndex] = 0
}

for (var i = 0; i < lines.length; i++) {
    print(lines[i])
}