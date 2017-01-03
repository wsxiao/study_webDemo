/**
 * Created by DKings on 2016/12/22.
 */
// //  1.0 进入
// function printLabel(labelObj:{label:string}){
//     console.log(labelObj.label);
// }
// var myObj = {size:10,label:"Size 10 Object"};
// printLabel(myObj);
function creatSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
        console.log(newSquare.color);
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
        console.log(newSquare.area);
    }
    return newSquare;
}
var mySquare = creatSquare({ color: "black", width: 4 });
// // 1.3 函数类型
// console.info("1.3 函数类型");
// interface SearchFunc{
//     (source:string,subString:string):boolean;
// }
//
// var mySearch:SearchFunc;
// mySearch = function(source:string,subString:string){
//     var result = source.search(subString);
//     if(result == -1){
//         return false;
//     }else{
//         return true;
//     }
// };
// // console.log(mySearch(123,1));
// console.log(mySearch("abcdefg","abc"));
// 1.4 扩展接口
console.info("扩展接口");
var square = {};
// var square = <Shape>{};
square.color = "blue";
square.sideLength = 100;
console.log(square);
//# sourceMappingURL=interface.js.map