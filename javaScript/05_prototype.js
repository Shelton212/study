function MyFont(name,size,color){
    this.name = name;
    this.size = size;
    this.color = color;
}

//原型的construor属性，指向类
console.log(MyFont.prototype.constructor === MyFont);//true

//显式原型，类的prototype属性，指向prototyppe对象
MyFont.prototype.printName = function(){
    console.log(this.name);
}

//实例化
var font = new MyFont("宋体",14,"brown");

//隐式原型，实例化对象的__proto__属性，指向prototype对象
font.__proto__.printSize = function(){
    console.log(this.size);
}

font.printName();//宋体
font.printSize();//14
