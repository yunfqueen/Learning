
interface Person { //定义一个接口
	readonly id: number; //只能在创建的时候被赋值，只读属性
  name: string; 
  age?: number; // 定义的变量中可以不存在age属性
  [propName: string]: any; // 定义了任意属性取 string 类型的值
}

let xiaoer: Person = { //定义一个变量，类型为Person
	id:222,
  name: '小二',
  age: 16,
  job:'IT'
};

//如果修改id则会报错
// xiaoer.id = 111

//定义一个函数
interface PersonFunc {
  (name: string, age: number): any;
}

let myFunc: PersonFunc;
myFunc = function(name: string, age: number) {
  return name+age;
}