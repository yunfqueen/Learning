## let 与const

#### let 相当于var 

##### 特性：
* 块级作用域 
* 没有预解析，不存在变量提升 
* 必须先定义在使用 
```
  {
    //块级作用域
  }
```

```
  function fn(){
    alert(a)  // TDZ 暂时性死区 //undefind
    let a = 12;
  }
  fn(); 
```
* 不能重复定义变量（不在同一个作用域中）
```
  let a = 12;
  let a = 5;
  console.log(a) 
  //Uncaught SyntaxError: Identifier 'a' has already been declared
```
```
  //for循环是父级作用域
  for(let i=0;i<3;i++){
    let i = 'abc';
    console.log(i) //三次'abc'
  }
  console.log(i) //undefind
```
#### const 特性和let相同
* 变量，定义好了不能改变 
* 定义完变量必须有值，不能为空，不能修改
```
  const arr = ['a','b']
  arr.push('c')
  console.log(arr)//['a','b','c']
  //arr为对象，对象本身只是引用,所以push后arr会改变
```