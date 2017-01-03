/**
 * Created by wangshuangxiao on 2016/12/8.
 */
'use strict';
// 1.boolean
console.info("1.boolean");
let isDone : boolean = false;
console.log(isDone);


// 2.number
console.info("2.number");
let decLiteral: number = 6; // 十进制
let hexLiteral: number = 0xf00d; //十六进制
let binaryLiteral: number = 0b1010; // 二进制
let ocralLiteral: number = 0o744; // 八进制

console.log(decLiteral); //6
console.log(hexLiteral); // 61453
console.log(binaryLiteral);// 10
console.log(ocralLiteral); // 484


// 3.string
console.info("3.string");
let name :string = "Dking";
let age:number = 18;
let sentence:string = `Hello,my name is ${name}. I'll be ${age + 1} years old next month.`;
console.log(sentence);


// 4.array
console.info("4.array");
// 4.1可以在元素类型后面接上 []，表示由此类型原色组长的数组
let list: number[] = [1,2,3];
console.log(list);
let list2: string[] = ["Smith","Tom","Lisa","Rose"];
console.log(list2);

// 4.2使用数组泛型，Array<元素类型>
let list5:Array<number> = [7,8,9];
console.log(list5);
let list4:Array<string> = ["京酱肉丝","青椒肉丝","萝卜肉丝","番茄肉丝"];
console.log(list4);


// 5.元祖：Tuple
console.info("5.元祖：tuple");
let tupleObj:[string, number];
tupleObj = ['Dking',18];
// tupleObj = [18,'Dking'];
// console.log(tupleObj);


// 6.枚举：enum
// 6.1默认情况下，从0开始为元素编号。
console.info("6.枚举：enum");
enum color {red,green,black,blue,yellow}
let c :color = color.black;
console.log(c);

// 6.2 手动的指定成员的数值。
// enum names {sx = 1,lp,xs,cg};
enum names {sx = 1,lp = 1,xs = 4,cg = 7}
let user : names = names.xs;
console.log(user);


// 7.任意值：any
console.info("7.任意值：any");
let notSure : any = 4;
notSure.toFixed();
console.log(notSure);

let prettySure : Object = 3;
prettySure.toFixed();
console.log(prettySure);    // Error: Property 'toFixed' doesn't exist on type 'Object'.


// 8.空值
console.info("8.空值");


// 10.类型判断
// 10.1 尖括号法
console.info("10.1:尖括号");
let someValue:any = "this is a string";
let strLength:number = (<string>someValue).length;
console.log(strLength);

// 10.2 as语法
console.info("10.2:as语法");
let someValue2 : any = "this is a string";
let strLength2:string = (someValue2 as string).length; // Length是number类型 不匹配
console.log(strLength2);










