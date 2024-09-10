//字符串
var username = '李新安';
//数字
var age = 20;
//布尔类型
var isTrue = true;
console.log(username);
console.log(age);
console.log(isTrue);
//字面量类型
function printText(s, alignment) {
    console.log(s, alignment);
}
printText('Hello', 'left');
//定义变量，并且指定为Cat类型
var c1 = {
    name: '小阿柏',
    age: 18
};
var c2 = {
    name: '小阿柏'
};
//定义一个类，使用class关键字
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    //方法
    User.prototype.study = function () {
        console.log(this.name + '正在学习');
    };
    return User;
}());
//使用User类型
var user = new User('廖乐乐');
//输出类中的属性
console.log(user.name);
//调用类中的方法
user.study();
