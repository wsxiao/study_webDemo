/**
 * Created by DKings on 2016/12/22.
 */
// 1.泛型
// 1.1特定的属性
function identity1(arg:number):number{
    return arg;
}
// var aa = identity1("abcd");  // string not number
var aa = identity1(11);
console.log(aa);


// 1.2 用 any类型
function identity2(arg:any):any{
    return arg;
}
var bb = identity2('this is an any type');
console.log(bb);


// 1.3 类型变量
function identity3<T>(arg:T):T{
    return arg;
}
var cc = identity3<string>("this is myString");
console.log(cc);


// 1.4 泛型类型
function identity4<T>(arg:T):T{
    return arg;
}
var myIdentity:<U>(arg:U) =>U = identity4;
console.log(myIdentity("泛型类型"));

// 1.4.1 用对象来描述泛型的类型
function identity5<T>(arg:T){
    return arg;
}
var myIdentity:{<T>(arg:T):T} = identity5;
console.log(myIdentity("women"));