//boolean
let isBoolean: boolean = false;
let createBoolean: Boolean = new Boolean(1); //new Boolean() 返回的是一个 Boolean 对象
//number
let isNumber:number = 1024;
//string
let sb:string = '小二';
let sth:string = 'Say hello!';
let todo:string = `${sb}见到阿姨要${sth}`;

//undefined和null是所有类型的子集
let isUndefined: undefined = undefined;
let isNull: null = null;
let isString: string = undefined;

//TypeScript中，可以用 void 表示没有任何返回值的函数,声明void变量只能将它赋值为undefined和null
function isVoid(): void {
  console.log('This is a void');
}
let unde: void = undefined;
let nu: void = null;

////any
let isAny:any = 'Hello World!'
isAny = ['C','M','J']

let something;   

//类型推论
// let typeIn = '小二';
// typeIn = ['C','M','J'];