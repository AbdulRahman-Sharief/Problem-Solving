var str1 = readline();
var str2 = readline();

if (str1.toLowerCase() > str2.toLowerCase()) {
    print(1);
} else if (str2.toLowerCase() > str1.toLowerCase()) {
    print(-1);
} else if (str1.toLowerCase() == str2.toLowerCase()) {
    print(0);
}