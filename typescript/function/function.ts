/**
 * Created by DKings on 2016/12/21.
 */
'use strict'
// 4.2 函数类型
// function add(x:number,y:number){
//     return x+y;
// }
// var myAdd = function(x:number,y:number):number{
//     return x + y;
// };
// console.log(myAdd(1,2));
//
// // 4.3 书写函数类型
// // 给参数、返回值定义类型；
// var myAdd2:(x:number,y:number) => number = function(x:number,y:number):number{
//     return x+y;
// };
// console.log(myAdd2(2,3));
//
// var myAdd3:(value:number,value2:number) => number
//     = function(x :number,y:number):number{
//     return x + y;
// };

// // 4.4 可选参数和默认参数
// function buildName(firstName:string,lastName:string){
//     return firstName + "," + lastName;
// }
// var result1 = buildName("xiao");
// console.log(result1);   // error
// var result2 = buildName("wang","xiao");
// console.log(result2);   // ok
// var result3 = buildName("wang","shuang","xiao");
// console.log(result3);   // error

// 4.4.1 可选参数
// function buildName(firstName:string,lastName?:string){
//     if(lastName)
//         return firstName + "," + lastName;
//     else
//         return firstName;
// }
// var result1 = buildName("wang");    // ok
// var result2 = buildName("wang","shuang");   // ok
// var result3 = buildName("wang","shuang","xiao");    // error
// console.log(result1);
// console.log(result2);
// console.log(result3);

// 4.4.3 默认参数
function buildName(firstName:string,lastName:string = "xiao"){
    return firstName + "," + lastName;
}
var result1 = buildName("wang");        //  wang,xiao
var result2 = buildName("wang","shuang");       // wang,shuang
var result3 = buildName("wang","shuang","xiao");        // error
console.log(result1);
console.log(result2);
console.log(result3);



