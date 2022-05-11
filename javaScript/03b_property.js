var font1 = {
    name:"宋体",
    size:14,
    color:"brown",
    //属性名包含特殊字符
    "font-style":"italic"
}

//属性名不确定
var temp = "weight"
font1[temp] = "bold";

console.log(font1)