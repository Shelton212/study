function MyFont(name,size,color){
    this.name = name;
    this.size = size;
    this.color = color;

    MyFont.prototype.printName = function(){
        console.log(this.name);
    }
}

var font1 = new MyFont("宋体",11,"brown");

console.log(font1);
console.log(font1.__proto__);
console.log(font1.__proto__.__proto__);
console.log(font1.__proto__.__proto__.__proto__);