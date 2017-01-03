/**
 * Created by wangshuangxiao on 2016/12/8.
 */
'use strict';
// 1.boolean
console.info("1.boolean");
var isDone = false;
console.log(isDone);
// 2.number
console.info("2.number");
var decLiteral = 6; // 十进制
var hexLiteral = 0xf00d; //十六进制
var binaryLiteral = 10; // 二进制
var ocralLiteral = 484; // 八进制
console.log(decLiteral); //6
console.log(hexLiteral); // 61453
console.log(binaryLiteral); // 10
console.log(ocralLiteral); // 484
// 3.string
console.info("3.string");
var name = "Dking";
var age = 18;
var sentence = "Hello,my name is " + name + ". I'll be " + (age + 1) + " years old next month.";
console.log(sentence);
// 4.array
console.info("4.array");
// 4.1可以在元素类型后面接上 []，表示由此类型原色组长的数组
var list = [1, 2, 3];
console.log(list);
var list2 = ["Smith", "Tom", "Lisa", "Rose"];
console.log(list2);
// 4.2使用数组泛型，Array<元素类型>
var list5 = [7, 8, 9];
console.log(list5);
var list4 = ["京酱肉丝", "青椒肉丝", "萝卜肉丝", "番茄肉丝"];
console.log(list4);
// 5.元祖：Tuple
console.info("5.元祖：tuple");
var tupleObj;
tupleObj = ['Dking', 18];
// tupleObj = [18,'Dking'];
// console.log(tupleObj);
// 6.枚举：enum
// 6.1默认情况下，从0开始为元素编号。
console.info("6.枚举：enum");
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["black"] = 2] = "black";
    color[color["blue"] = 3] = "blue";
    color[color["yellow"] = 4] = "yellow";
})(color || (color = {}));
var c = color.black;
console.log(c);
// 6.2 手动的指定成员的数值。
// enum names {sx = 1,lp,xs,cg};
var names;
(function (names) {
    names[names["sx"] = 1] = "sx";
    names[names["lp"] = 1] = "lp";
    names[names["xs"] = 4] = "xs";
    names[names["cg"] = 7] = "cg";
})(names || (names = {}));
var user = names.xs;
console.log(user);
// 7.任意值：any
console.info("7.任意值：any");
var notSure = 4;
notSure.toFixed();
console.log(notSure);
var prettySure = 3;
prettySure.toFixed();
console.log(prettySure); // Error: Property 'toFixed' doesn't exist on type 'Object'.
// 8.空值
console.info("8.空值");
// 10.类型判断
// 10.1 尖括号法
console.info("10.1:尖括号");
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
// 10.2 as语法
console.info("10.2:as语法");
var someValue2 = "this is a string";
var strLength2 = someValue2.length; // Length是number类型 不匹配
console.log(strLength2);
//# sourceMappingURL=types.js.map