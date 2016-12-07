/**
 * Created by wangshuangxiao on 2016/11/3.
 */
function A(){
    this.userID = 24; // userID
    this.tokenId = "wakaka";    // 用户令牌
    this.sessionId = "wakaka";   // 会话ID
}
function B(){
    this.resourceCategoryId = 2;
}
B.prototype = new A();
var b = new B();
console.log(b.userID);
console.log(b.tokenId);
console.log(b.sessionId);
console.log(b.resourceCategoryId);

