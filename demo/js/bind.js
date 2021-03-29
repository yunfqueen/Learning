// bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。
// bind 函数的两个特点： 返回一个函数 可以传入参数

//============================= 返回函数 =============================//

var foo = {
    value: 1
};
function bar() {
    console.log(this.value);
}
// 返回了一个函数
var bindFoo = bar.bind(foo); 
bindFoo(); // 1

//===================================== 模拟返回函数 ======================================//
Function.prototype.bind2 = function (context) {
    var self = this;
    return function () {
        self.apply(context);
    }
}

//=========================== 传入参数 ==========================//
var foo = {
    value: 1
};
function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);

}
var bindFoo = bar.bind(foo, 'daisy');
bindFoo('18');
//1
//daisy
//18

//===================================== 模拟传入参数 ======================================//
// Array.prototype.slice.call(arguments) 将函数传入的参数转换为数组对象 
//不直接使用arguments对象原因 ==> typeof arguments打印出的是object，可以看出arguments并不是真正的数组，它是一个对象。
Function.prototype.bind2 = function (context) {
    var self = this;
    // 获取bind2函数从第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1);
    console.log({args,arguments})
    //args:["daisy"] arguments:[0: {value: 1},1: "daisy"]
    return function () {
        // 这个时候的arguments是指bind返回的函数传入的参数 Array.prototype.slice.call(arguments)可用[...arguments]或Array.from(arguments)替换
        var bindArgs = Array.prototype.slice.call(arguments);
        // var bindArgs = [...arguments];
        // var bindArgs = Array.from(arguments);
        console.log({bindArgs,arguments})
        //bindArgs:["18"] arguments:["18"]
        //args.concat(bindArgs) ==> ["daisy","18"]
        self.apply(context, args.concat(bindArgs));
    }
}

//===================================== 构造函数效果 =====================================//
// 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
// 当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效
var value = 2
var foo = {
    value: 1
};
function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin'
var bindFoo = bar.bind(foo, 'daisy');
var obj = new bindFoo('18');
// undefined 尽管在全局和 foo 中都声明了 value 值，最后依然返回了 undefind，说明绑定的 this 失效了，这个时候的 this 已经指向了 obj。
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin复制代码

// ===================================== 构造函数效果的模拟实现 =====================================//
Function.prototype.bind2 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var fbound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        // 当作为构造函数时，this 指向实例，self 指向绑定函数，因为下面一句 `fbound.prototype = this.prototype;`，已经修改了 fbound.prototype 为 绑定函数的 prototype，此时结果为 true，当结果为 true 的时候，this 指向实例。
        // 当作为普通函数时，this 指向 window，self 指向绑定函数，此时结果为 false，当结果为 false 的时候，this 指向绑定的 context。
        self.apply(this instanceof self ? this : context, args.concat(bindArgs));
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承函数的原型中的值
    fbound.prototype = this.prototype;
    return fbound;
}

//======================== 优化模拟实现 ======================//
// 直接将 fbound.prototype = this.prototype，我们直接修改 fbound.prototype 的时候，也会直接修改函数的 prototype。这个时候，我们可以通过一个空函数来进行中转：
Function.prototype.bind2 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fbound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(this instanceof self ? this : context, args.concat(bindArgs));
    }
    fNOP.prototype = this.prototype;
    fbound.prototype = new fNOP();
    return fbound;
}

//================================================= 最终bind模拟 =========================================================//
Function.prototype.bind2 = function (context) {

    //调用 bind 的不是函数判断
    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var self = this;

    //args保存bind()函数传递时传递的参数,这里的arguments是bind()函数传递尽量的参数,老函数的参数
    var args = [...arguments].slice(1)
    return function F(){
        //当被当做构造函数调用的时候this指向一个新的对象,而被当做普通函数调用的时候,this是指向window的
        //因为返回了一个函数,我们可以new F(),所以需要判断
        if(this instanceof F){
            //arguments是新创建函数传递进来的参数
            return new self(...args,...arguments) 
        }
        //被当做普通函数调用的时候
        return self.apply(context,args.concat(...arguments))
    }

    // var self = this;
    // var args = Array.prototype.slice.call(arguments, 1); //该行代码也可以用[...arguments].slice(1)
    // var fNOP = function () {};

    // var fbound = function () {
    //     return self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));
    // }

    // fNOP.prototype = this.prototype;
    // fbound.prototype = new fNOP();

    // return fbound;

}

