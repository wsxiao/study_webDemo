var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by DKings on 2016/12/21.
 */
// 类
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        console.log("Hello," + this.greeting);
        return "Hello," + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
// 继承
// 定义一个animal类
var animal = (function () {
    // private name:string; // 可以修改为private
    function animal(theName) {
        this.name = theName;
    }
    animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        alert(this.name + "moved" + meters + "m.");
    };
    return animal;
}());
// 定义一个snake类 继承 animal
var snake = (function (_super) {
    __extends(snake, _super);
    function snake(name) {
        _super.call(this, name);
    }
    snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        alert("摩擦摩擦... ...");
        _super.prototype.move.call(this, meters);
    };
    return snake;
}(animal));
// 定义一个horse类 继承 animal类
var horse = (function (_super) {
    __extends(horse, _super);
    function horse(name) {
        _super.call(this, name);
    }
    horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 44; }
        alert("策马奔腾... ...");
        _super.prototype.move.call(this, meters);
    };
    return horse;
}(animal));
var sam = new snake("snake,");
var tom = new horse('horse,');
sam.move();
tom.move(34);
//# sourceMappingURL=class.js.map