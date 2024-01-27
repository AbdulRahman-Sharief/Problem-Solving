var n = +readline();
var students = readline().split(' ').map(Number);

var NumberOfTeams = 0;
var teams = [];
for (var i = 0; i < n; i++) {
    if (students.includes(1) && students.includes(2) && students.includes(3)) {
        teams.push([students.indexOf(students.find((element) => element === 1)), students.indexOf(students.find((element) => element === 2)), students.indexOf(students.find((element) => element === 3))]);
        students[students.indexOf(students.find((element) => element === 1))] = 0;
        students[students.indexOf(students.find((element) => element === 2))] = 0;
        students[students.indexOf(students.find((element) => element === 3))] = 0;
        NumberOfTeams++;
    } else {
        break;
    }
}


if (NumberOfTeams === 0) {
    print(0);

} else {
    print(NumberOfTeams)
    for (var i = 0; i < teams.length; i++) {
        print(teams[i].map(x => x + 1).join(' '))
    }
}