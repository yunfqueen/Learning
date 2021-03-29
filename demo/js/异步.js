setTimeout(()=>{console.log(111)},0)
let promise = new Promise((resolve,reject)=>{
	console.log(222);
	resolve(333)
});
let promise2 = new Promise((resolve,reject)=>{
	console.log(555);
	resolve(666)
});
setTimeout(()=>{
	console.log(444);
},0)
promise.then(res=>{
	console.log(res);
});
promise2.then(res=>{
	console.log(res);
});
//222 555 333 666 111 444