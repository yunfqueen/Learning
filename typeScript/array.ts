let typearray: string[] = ['a','b','c','d']; //确定属性
let typearray2: (number | string)[] = [1,'a','b','c','d']; //联合类型
let typearray3: any[] = ['C','M',1,2,3]; //任意属性
//id类型值为number，则变量值应为number，若id类型值为string则变量值的类型为string
interface NumArray {
  [id: number]: number;
}
let numarray: NumArray = [1,2,3,4];

interface NameArray {
  [name: number]: string;
}
let namesarray: NameArray = ['C','M','J'];

//数组泛型
let elemarray: Array<number> = [1, 1, 2, 3, 5];