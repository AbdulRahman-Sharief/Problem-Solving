var n = readline().split(' ');
var gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
};
print((6 - Math.max(parseInt(n[0]), parseInt(n[1])) + 1) / gcd((6 - Math.max(parseInt(n[0]), parseInt(n[1])) + 1), 6) + "/" + 6 / gcd((6 - Math.max(parseInt(n[0]), parseInt(n[1])) + 1), 6));