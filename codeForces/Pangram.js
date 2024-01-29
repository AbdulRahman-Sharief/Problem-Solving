var n = +readline();
var str = [...new Set(readline().toLowerCase().split(""))].join("");
var p = 0;
for (var i = 0; i < str.length; i++) {
  //   console.log(str[i]);
  p = p + str.charCodeAt(i);
  //   console.log(p);
}

print(p === 2847 ? "YES" : "NO");
