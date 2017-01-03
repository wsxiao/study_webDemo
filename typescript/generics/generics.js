/**
 * Created by DKings on 2016/12/22.
 */
// 1.泛型
// 1.1特定的属性
function identity1(arg) {
    return arg;
}
// var aa = identity1("abcd");  // string not number
var aa = identity1(11);
console.log(aa);
// 1.2 用 any类型
function identity2(arg) {
    return arg;
}
var bb = identity2('this is an any type');
console.log(bb);
// 1.3 类型变量
function identity3(arg) {
    return arg;
}
var cc = identity3("this is myString");
console.log(cc);
// 1.4 泛型类型
function identity4(arg) {
    return arg;
}
var myIdentity = identity4;
console.log(myIdentity("泛型类型"));
// 1.4.1 用对象来描述泛型的类型
function identity5(arg) {
    return arg;
}
var myIdentity = identity5;
console.log(myIdentity("women"));
//# sourceMappingURL=generics.js.map