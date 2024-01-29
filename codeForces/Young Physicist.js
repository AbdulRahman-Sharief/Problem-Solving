var n = +readline();
var forces = [];
for (var i = 0; i < n; i++) {
  forces.push(readline().split(" ").map(Number));
}
var X = 0;
var Y = 0;
var Z = 0;
for (var j = 0; j < forces.length; j++) {
  X = X + forces[j][0];
  Y = Y + forces[j][1];
  Z = Z + forces[j][2];
}

print(X === 0 && Y === 0 && Z === 0 ? "YES" : "NO");
