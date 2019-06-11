#### 函数

##### 函数默认值
* es6允许为函数的参数设置默认值，即直接写在参数定义的后面。

```
function log(x, y = 'World') {
  console.log(x, y);
}
log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello
```
* 参数变量是默认声明的，所以不能用let或const再次声明。
```
function foo(x = 5) {
  let x = 1; // error
  const x = 2; // error
}
```
* 作用域
  
  * 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。

  ```
  //参数y的默认值等于变量x。调用函数f时，参数形成一个单独的作用域。在这个作用域里面，默认值变量x指向第一个参数x，而不是全局变量x，所以输出是2

  var x = 1;
  function f(x, y = x) {
    console.log(y);
  }
  f(2) // 2
  
  ```
  ```
  //函数f调用时，参数y = x形成一个单独的作用域。这个作用域里面，变量x本身没有定义，所以指向外层的全局变量x。函数调用时，函数体内部的局部变量x影响不到默认值变量x。
  let x = 1;
  function f(y = x) {
    let x = 2;
    console.log(y);
  }
  f() // 1

  //如果此时，全局变量x不存在，就会报错。
  function f(y = x) {
    let x = 2;
    console.log(y);
  }
  f() // ReferenceError: x is not defined
  //同上，报错
  //参数x = x形成一个单独作用域。实际执行的是let x = x，由于暂时性死区的原因，这行代码会报错”x 未定义“。
  var x = 1;
  function foo(x = x) {
    // ...
  }

  foo() // ReferenceError: x is not defined
  ```

##### rest 参数 （...变量名）
* rest 用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
```
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(1, 2) // 3
```
* rest 参数代替arguments变量
```
// arguments变量的写法
function sortFn() {
  return Array.prototype.slice.call(arguments).sort();
}

// rest参数的写法
const sortFn = (...num) => num.sort();
```
* rest 参数之后不能再有其他参数（即只能是最后一个参数）
  ```
  // 报错
  function f(a, ...b, c) {
    // ...
  }
  ```
##### 箭头函数
* this问题，定义函数所在当对象，不是运行时所在的对象
* 箭头函数中无arguments，用 ... 
* 箭头函数不能当构造函数
```
  function show(){
    this.name = 'yun';
  }
  let person = new show();
  console.log(person.name) //yun
//------------------------------
  let show = ()=>{
    this.name = 'yun';
  }
  let person = new show();
  console.log(person.name) //报错
```
