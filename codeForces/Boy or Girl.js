var n = readline();
var arr = n.split('');
var distinct = [... new Set(arr)];
if (distinct.length % 2 !== 0) {
    print('IGNORE HIM!')
} else if (distinct.length % 2 === 0) {
    print('CHAT WITH HER!')
}
// console.log([...new Set(['a', 'b', 'a', 'b', 'c'])])