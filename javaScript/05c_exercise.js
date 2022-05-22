var A = function(){

}

A.prototype.n = 1;

var b = new A();

A.prototype = {
    n:2,
    m:3
};

var c = new A();

// console.log(b.n)//1
// console.log(b.m)//undefined
// console.log(c.n)//2
// console.log(c.m)//3

console.log(c.__proto__.constructor)
console.log(b.__proto__.constructor)

console.log("=======================")

var F = function(){};

Object.prototype.a = function(){
    console.log('a()');
};

Function.prototype.b = function(){
    console.log('b()');
}

var f = new F()
// f.a();//a()
// f.b();//TypeError:f.b is not a function
// F.a();//a()
// F.b();//b()

