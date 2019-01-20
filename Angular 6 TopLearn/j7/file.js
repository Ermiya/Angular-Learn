var Name = 'ali';
function MySum(value) {
    return value;
}
console.log(MySum(234));
console.log(MySum('ALI'));
console.log(MySum('Far'));
var MyGeneric = /** @class */ (function () {
    function MyGeneric(param) {
        this.param = param;
    }
    return MyGeneric;
}());
var m = new MyGeneric('Farrr');
console.log(m.param);
function Names(params) {
    return params;
}
console.log(Names(["AAA", "BBB"]));
console.log(Names([333, 444, 555]));
