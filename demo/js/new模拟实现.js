// new操作符实例化了一个对象；
// 这个对象可以访问构造函数的属性；
// 这个对象可以访问构造函数原型上的属性；
// 对象的__proto__属性指向了构造函数的原型；
// 返回这个对象
function objectFactory(){
    var obj=new Object();
    debugger
    var Constructor=[].shift.apply(arguments);
    obj.__proto__=Constructor.prototype;
    var ret=Constructor.apply(obj,arguments);//取得构造函数的返回值
    return typeof ret==="object"? ret : obj;//如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象
}

function Otaku (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

var person = objectFactory(Otaku, 'Kevin', '18')

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin
