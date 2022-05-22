function MyFont(name,size,color){
    this.name = name;
    this.size = size;
    this.color = color;
}

MyFont.prototype.printName = function(){
    console.log(this.name);
}

var font = new MyFont("宋体",14,"brown");

console.log(MyFont.prototype);//{ printName: [Function (anonymous)] }
console.log(font.__proto__);//{ printName: [Function (anonymous)] }

font.printName();//宋体

console.log(font instanceof MyFont);//true
console.log(font instanceof Object);//true
console.log(font instanceof Function);//false

console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Object instanceof Function);//true
console.log(Object instanceof Object);//true