/**
 * Created by wangshuangxiao on 2016/11/21.
 */
/**  箭头函数 **/
// 1.reduce  求和运算
var resoult = [3, 2, 1, 4]
    .reduce(function (totle, current) { return totle + current; }, 0);
console.log(resoult);
// 2. filter 查找偶数
var even = [1, 2, 3, 4, 8]
    .filter(function (el) { return !(el % 2); });
console.log(even);
// 3. sort  排序
var data = [3, 1, 5];
var sorted = data.sort(function (a, b) {
    var diff = a - b;
    if (diff !== 0) {
        return diff;
    }
    return a - b;
});
console.log(sorted);
//# sourceMappingURL=hello.js.map