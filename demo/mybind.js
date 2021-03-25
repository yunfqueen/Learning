/**
 * bind()会创建一个新函数,新函数和被调函数具有相同的函数体
 * 当新函数被调用时的this值绑定到bind()的第一个参数,该参数不能被重写,新函数被调用时,bind()也接受预设的参数提供给原函数
 * 新函数也可以new操作符创建对象,这种行为就是把原函数作为构造器,提供的this值被忽略,同时调用时的参数被提供给模拟函数。
 */
{
    //fn.bind(obj,a1,a2)
    Function.prototype.myBind = function(context){
        //本身必须是个方法
        if(typeof this != 'function'){
            throw new TypeError('NOT A FUNCTION')
        }
        var _this = this;

        //args保存bind()函数传递时传递的参数,这里的arguments是bind()函数传递尽量的参数,老函数的参数
        var args = [...arguments].slice(1)
        return function F(){
            //当被当做构造函数调用的时候this指向一个新的对象,而被当做普通函数调用的时候,this是指向window的
            //因为返回了一个函数,我们可以new F(),所以需要判断
            if(this instanceof F){
                //arguments是新创建函数传递进来的参数
                return new _this(...args,...arguments) 
            }
            //被当做普通函数调用的时候
            return _this.apply(context,args.concat(...arguments))
        }
    }


    //普通改变this指向,返回一个方法的
    var foo = {
        value:'233',
        getValue: function() {
            console.log(this.value);
            console.log(arguments[0], arguments[1])
        }
    }
    
    //这里的1是作为bind的参数
    var newGetValue = foo.getValue.myBind(foo, 1);
    newGetValue(2);


    //当成构造函数使用的
    var value = 2;

    var foo = {
        value: 1
    };

    function bar(name, age) {
        this.habit = 'shopping';
        console.log(this.value);
        console.log(name);
        console.log(age);
    }

    bar.prototype.friend = 'kevin';

    
    var bindFoo = bar.bind(foo, 'daisy');
    //返回的函数被当成构造函数使用的时候
    var obj = new bindFoo('18');
    // undefined
    // daisy
    // 18
    console.log(obj.habit);
    console.log(obj.friend);
    // shopping
    // kevin

}








