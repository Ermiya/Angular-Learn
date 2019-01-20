function sum(a, b) {
    return a + b;
}
console.log(sum(3, 6));
function MySum(a, b) {
    return a + b;
}
console.log(MySum(7, 4));
var FullName = function (FirstName, LastName) {
    return FirstName + " " + LastName;
};
console.log(FullName("Farshid", "Saeidi"));
function ShowNames(name) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(names);
    return name + "------------" + names.reverse().join(" , ");
}
console.log(ShowNames("Farshid", "reza", "Hasan", "Ali"));
var sumsum = function (a, b) { return a + b; };
console.log(sumsum(77, 99));
