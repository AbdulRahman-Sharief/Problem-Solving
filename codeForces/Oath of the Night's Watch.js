var n = +readline();
var strengths = readline().split(" ").map(Number);

var support = 0;
var less = false;
var greater = false;
// for (var i = 0; i < n; i++) {
//   less = true;
//   greater = true;
//   //less check
//   for (var j = 0; j < n; j++) {
//     if (strengths[i] > strengths[j]) less = false;
//     if (strengths[i] < strengths[j]) greater = false;
//     // console.log("less " + less);
//   }

//   //   console.log("================");
//   if (less === false && greater === false) support++;
// }
strengths.sort((a, b) => a - b);

for (var i = 0; i < strengths.length; i++) {
  if (
    strengths[strengths.length - 1] > strengths[i] &&
    strengths[0] < strengths[i]
  )
    support++;
}

print(support);
