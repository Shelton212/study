// 多个引用变量指向同一个对象,修改数据，其他变量的数据也会修改
var obj1 = {name:'Peter'};
var obj2 = obj1;

(function fun(obj){
    obj.age = "18";
})(obj1);

console.log(obj1);//{ name: 'Peter', age: '18' }
console.log(obj2);//{ name: 'Peter', age: '18' }

console.log("========================================")

// 多个引用变量指向同一个对象,修改指向，其他变量的指向不会变
var a = {seq:"对象1"};
var b = a;
a = {seq:"对象2"};
console.log("a",a.seq);//a 对象2
console.log("b",b.seq);//b 对象1

(function(obj){
    obj = {seq:"对象3"};
})(a);
console.log("a",a.seq);//a 对象2

console.log("========================================")

// JS调用函数时传递变量参数时，是值传递还是引用传递？

var c = 3;
function fn(c) {
    c *= c;
    return c;
}
fn(c);
console.log(c);//3 数值
console.log(fn(c));//9 


function fn(obj) {
    obj.age = 18;
    return obj;
}
console.log(fn({Name:"Tom"}));//地址值

