var n = parseInt(readline());
var s = readline();
var anton = 0;
var danik = 0;

s.split('').map((i) => {
    if (i === 'A') anton++;
    if (i === 'D') danik++;
});

if (anton > danik) { print('Anton') } else if (anton < danik) { print('Danik') } else if (anton = danik) { print('Friendship') };