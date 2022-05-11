//工厂模式——使用object的构造函数
function factoryMode(name,size,color){
    var obj = {
        fontName:name,
        fontSize:size,
        fontColor:color,
        printSize: function (){
            console.log(this.fontSize);
        }
    }

    return obj;
}

var font1 = factoryMode("宋体",11,"brown");
var font2 = factoryMode("微软雅黑",12,"red");

console.log("=============================")

//工厂模式创建对象——无参构造
function MyFont(){}

function factoryModeSelf(name,size,color){
    var obj = new MyFont();
    obj.fontName = name;
    obj.fontSize = size;
    obj.fontColor = color;
    MyFont.prototype.prinSize = function(){
        console.log(this.fontSize);
    }
    return obj;
}

var font3 = factoryModeSelf("宋体",13,"brown");
var font4 = factoryModeSelf("微软雅黑",14,"red");

console.log("=============================")

// 创建对象——有参构造
function MyFont(name,size,color){
    this.fontName = name;
    this.fontSize = size;
    this.fontColor = color;
    this.printSize = function(){
        console.log(this.fontSize);
    }
}

var font5 = new MyFont("宋体",15,"brown");
var font6 = new MyFont("微软雅黑",16,"red");