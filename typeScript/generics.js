function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(3, 'x'); // ['x', 'x', 'x']
//准确的定义返回值的类型
function createArray2(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray2(3, 'x'); // ['x', 'x', 'x']
function createArray3(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray3(3, 'x'); // ['x', 'x', 'x']
//定义泛型的时候，可以一次定义多个类型参数：
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven', 7]
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
//多类型参数互相约束
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 });
//泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
var createArray4;
createArray4 = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
createArray(3, 'x'); // ['x', 'x', 'x']
