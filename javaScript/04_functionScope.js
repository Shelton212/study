// var a = 123;
// function fun(a){
//     console.log(a);//123
//     a = 456;
// }
// fun(123);
// console.log(a);//123


// var a = 123;
// function fun(){
//     console.log(a);//123
// }
// fun();


// var a = 123;
// function fun(){
//     console.log(a);//undefined
//     var a = 456;
// }
// fun();
// console.log(a);//123


// var a = 123;
// function fun(){
//     console.log(a);//123
//     a = 456;
// }
// fun();
// console.log(a)//456


var a = 123;
function fun(a){
    console.log(a);//undefined
    a = 456;
}
fun();
console.log(a)//123