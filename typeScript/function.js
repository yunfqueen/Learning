//函数声明
function sum(x, y) {
    return x + y;
}
//函数表达式
var sum2 = function (x, y) {
    return x + y;
};
var sum3 = function (x, y) {
    return x + y;
}; //该处的 => 用来表示函数的定义，左边为输入类型，右边为输出类型与ES6的箭头函数有所区别
//可选参数
function Person(name, age) {
    if (name) {
        return name + age + '少年感';
    }
    else {
        return name + '不知道年龄';
    }
}
var xiaoerPerson = Person('小二', 16);
var xiaoer = Person('小二');
//默认参数
function Person2(name, age) {
    if (age === void 0) { age = 16; }
    return name + age + '少年感';
}
var xiaoerPerson2 = Person2('小二', 16);
var xiaoer2 = Person2('小二');
