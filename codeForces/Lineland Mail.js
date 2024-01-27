var n = parseInt(readline());
var c = readline().split(" ");

function parser(x) {
  return parseInt(x);
}
c = c.map(parser);
var answers = [];
answers.push([Math.abs(c[1] - c[0]), Math.abs(c[n - 1] - c[0])]);
for (var i = 1; i < n - 1; ++i) {
  var nearest = Math.min(Math.abs(c[i] - c[i - 1]), Math.abs(c[i] - c[i + 1]));
  var furthest = Math.max(Math.abs(c[i] - c[n - 1]), Math.abs(c[i] - c[0]));

  answers.push([nearest, furthest]);
}
answers.push([Math.abs(c[n - 1] - c[n - 2]), Math.abs(c[n - 1] - c[0])]);

for (var i = 0; i < n; ++i) {
  print(answers[i][0] + " " + answers[i][1]);
}
