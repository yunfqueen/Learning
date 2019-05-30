//函数声明
function sum(x: number, y: number): number {
  return x + y;
}
//函数表达式
let sum2 = function (x: number, y: number): number {
  return x + y;
};
let sum3: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}; //该处的 => 用来表示函数的定义，左边为输入类型，右边为输出类型与ES6的箭头函数有所区别

//可选参数
function Person(name: string, age?: number) {
  if (name) {
      return name + age + '少年感' ;
  } else {
      return name +'不知道年龄';
  }
}
let xiaoerPerson = Person('小二', 16);
let xiaoer = Person('小二');

//默认参数
function Person2(name: string, age: number=16) {
    return name + age + '少年感' ;
}
let xiaoerPerson2 = Person2('小二', 16);
let xiaoer2 = Person2('小二');

//剩余参数
function push(array, ...rest: any[]) {
  rest.forEach(function(item) {
      array.push(item);
  });
}
let a = [];
push(a, 1, 2, 3);

//重载
function judgeType(type:number|string):number|string{
  if(typeof type === "number"){
      return type.toFixed(2);
  }else if(typeof type === "string"){
      return type.substring(0,1);
  }
}
console.log(judgeType(1));
console.log(judgeType("aaa"));

function judgeType2(type:number):number;
function judgeType2(type:string):string;
function judgeType2(type:number|string):number|string{
    if(typeof type === "number"){
        return type.toFixed(2);
    }else if(typeof type === "string"){
        return type.substring(0,1);
    }
}

console.log(judgeType2(1));
console.log(judgeType2("abc"));
