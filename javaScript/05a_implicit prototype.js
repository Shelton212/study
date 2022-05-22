var MyFont = function(name,size,color){
    this._name = name;
    this._size = size;
    this._color = color;
}

MyFont.prototype.setName = function(name){
    this._name = name;
}

MyFont.prototype.getName = function(){
    return this._name;
}

var font1 = new MyFont("宋体",14,"brown");
var font2 = new MyFont("微软雅黑",12,"black");

font2.setName("仿宋")

console.log(font1.getName());
console.log(font2.getName());