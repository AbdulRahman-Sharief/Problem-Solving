var str1 = readline();
var str2 = readline();

var arr1 = str1.split("");
var arr2 = str2.split("");

var counter = 0;

if (str1 !== str2) {
  counter = Math.max(str1.length, str2.length);
}

print(counter === 0 ? -1 : counter);
