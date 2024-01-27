
var informations = readline().split(' ').map(Number)

var numberOfCakes = informations[0]
var timeToBake = informations[1]
var cakeAtOnce = informations[2]
var timeToBuild = informations[3]


var currentTime = 0
var build = false

while (numberOfCakes > 0) {
    currentTime += timeToBake
    numberOfCakes -= cakeAtOnce

    if (currentTime > timeToBuild && numberOfCakes > 0) {
        build = true
        break;
    }
}

build ? print('YES') : print('NO')