// 基本数据类型
var numTest = 3;
var stringTest = "test";
var booleanTest = true;
var undefinedTest;
var nullTest = null;

// 引用数据类型
var objTest = {name:"Tom"};
var fnTest = function(){};
var arrTest = [1,objTest];

// Testof判断类型
console.log(typeof numTest);//number
console.log(typeof stringTest);//string
console.log(typeof booleanTest);//boolean
console.log(typeof undefinedTest);//undefined
console.log(typeof nullTest);//object
console.log(typeof objTest);//object
console.log(typeof fnTest);//function
console.log(typeof arrTest);//object

console.log("==========================================");

// type无法区分null和引用数据类型（object、array），但function类型例外
console.log(typeof nullTest === "object");//true
console.log(typeof objTest === "object");//true
console.log(typeof arrTest === "object");//true
console.log(typeof fnTest === "object");//false
console.log(typeof fnTest === "function");//true

console.log("==========================================");

//判断null的方法
console.log("null",nullTest === null);
console.log("undefined",undefinedTest === undefined);

//判断array的方法
console.log("arr",arrTest instanceof Array);

//判断function的方法
console.log("fn",fnTest instanceof Function);
console.log("fn",typeof fnTest === "function");

console.log("==========================================");

// instanceof判断实例的是否属于某个对象
console.log(objTest instanceof Object);//true
console.log(arrTest instanceof Object);//true
console.log(fnTest instanceof Object);//true

console.log(arrTest instanceof Array);//true
console.log(fnTest instanceof Function);//true

console.log("==========================================");

// === 与 ==
    //类型相同
var a;
console.log(a == undefined);//true
console.log(a === undefined);//true

    // 类型不同
var b = "";
console.log(b == "");//true
console.log(b == 0);//true
console.log(b == false);//true

console.log("==========================================");

// 练习
function fn1(){
    console.log("fn1");
    return fn2;
};
function fn2(){
    console.log("fn2");
    return "打印输出此ok"
};

var arr = [fn1,2,"good"];
var obj = {name:"ok",
            age:"20",
            arr
        };

console.log(obj.arr[0]()());
