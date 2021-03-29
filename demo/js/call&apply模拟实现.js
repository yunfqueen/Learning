//call

var foo = {
    value: 1
};
function bar() {
    console.log(this.value);
}
bar.call(foo); // 1

// call 改变了 this 的指向，指向到 foo
// bar 函数执行了
//=================== 模拟上方代码 =========================
 var foo={
     value:1,
     bar:function(){
        console.log(this.value)
     }
 };
 foo.bar();//1
//  这个时候 this 就指向了 foo， 但是这样却给 foo 对象本身添加了一个属性,用 delete 再删除它
//  所以我们模拟的步骤可以分为： 将函数设为对象的属性  执行该函数  删除该函数,即
    foo.fn = bar
    foo.fn()
    delete foo.fn

//=================== 模拟代码升级 =========================

Function.prototype.call2 = function(context) {
    // 首先要获取调用call的函数，用this可以获取
    context.fn = this;
    context.fn();
    delete context.fn;
}
// 测试
var foo = {
    value: 1
};
function bar() {
    console.log(this.value);
}
bar.call2(foo); // 1

//=================== call 函数还能给定参数执行函数 ====================
var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}

bar.call(foo, 'kevin', 18);
// kevin
// 18
// 1

//传入的参数并不确定，我们可以从 Arguments 对象中取值，取出第二个到最后一个参数，然后放到一个数组里
// 以上个例子为例，此时的arguments为：
// arguments = {
//      0: foo,
//      1: 'kevin',
//      2: 18,
//      length: 3
// }
// 因为arguments是类数组对象，所以可以用for循环
var args = [];
for(var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
}
// 执行后 args为 [foo, 'kevin', 18]
// 不定长的参数问题解决了，我们接着要把这个参数数组放到要执行的函数的参数里面去。
//用 eval 方法拼成一个函数,这里 args 会自动调用 Array.toString() 这个方法。
//eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
eval('context.fn(' + args +')');

//====================== 模拟代码再次升级 ==============================
Function.prototype.call3 = function(context) {
    context.fn = this;
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    eval('context.fn(' + args +')');
    delete context.fn;
}

//测试
var foo={
    value :1
}
function bar(name,age){
    console.log(name)
    console.log(age)
    console.log(this.value);
}
bar.call3(foo,'lily',20)
//lily
//20
//1

//=======================1.this 参数可以传 null，当为 null 的时候，视为指向 window ===================
var value = 1;
function bar() {
    console.log(this.value);
}
bar.call(null); // 1

//======================= 2.函数是可以有返回值的！ =====================
var obj = {
    value: 1
}

function bar(name, age) {
    return {
        value: this.value,
        name: name,
        age: age
    }
}

console.log(bar.call(obj, 'kevin', 18));
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }

//====================================== 最终模拟实现代码 ====================================

Function.prototype.call2 = function (context) {
    var context = context || window;
    context.fn = this;

    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }

    var result = eval('context.fn(' + args +')');

    delete context.fn
    return result;
}

// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}
bar.call(null); // 2
console.log(bar.call2(obj, 'kevin', 18));
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }

//========================================== apply ======================================//
Function.prototype.apply = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}
