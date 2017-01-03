/**
 * Created by DKings on 2016/12/21.
 */
// 类
class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting = message;
    }
    greet(){
        console.log("Hello,"+this.greeting);
        return "Hello,"+this.greeting;
    }
}
var greeter = new Greeter("world");


// 继承
// 定义一个animal类
class animal{
     name:string;           // 默认为public
    // private name:string; // 可以修改为private
    constructor(theName:string){
        this.name = theName;
    }
    move(meters : number = 0){
        alert(this.name + "moved" + meters + "m.");
    }
}

// 定义一个snake类 继承 animal
class snake extends  animal{
    constructor(name:string){
        super(name);
    }
    move(meters = 5){
        alert("摩擦摩擦... ...");
        super.move(meters);
    }
}

// 定义一个horse类 继承 animal类
class horse extends animal{
    constructor(name:string){
        super(name);
    }
    move(meters = 44){
        alert("策马奔腾... ...");
        super.move(meters);
    }
}

var sam = new snake("snake,");
var tom:animal = new horse('horse,');
sam.move();
tom.move(34);

