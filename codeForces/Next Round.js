var str = readline().split(" ").map(Number);
var arr = readline().split(" ").map(Number);
var n = str[0];
var k = str[1];
var adv = 0;
for (var i = 0; i < n; i++) {
  if (arr[i] === 0 || arr[i] < 0) break;
  if (arr[i] >= arr[k - 1]) adv++;
}
print(adv);
