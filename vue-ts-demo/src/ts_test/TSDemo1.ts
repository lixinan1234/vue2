//字符串
let username:string = '李新安'
//数字
let age:number = 20
//布尔类型
let isTrue:boolean = true

console.log(username)
console.log(age)
console.log(isTrue)

//字面量类型
function printText(s:string,alignment: 'left'|'right'|'center'){
    console.log(s,alignment)
}
printText('Hello','left')


//定义接口
interface Cat{
    name:string,
    age?:number//加上？表示可选，可以有也可以没有
}

//定义变量，并且指定为Cat类型
const c1:Cat = {
    name:'小阿柏',
    age:18
}

const c2:Cat = {
    name:'小阿柏'
}


//定义一个类，使用class关键字
class User{
    name:string;//指定类中的属性
    constructor(name:string){
        this.name = name
    }
    //方法
    study(){
        console.log(this.name + '正在学习')
    }
}

//使用User类型
const user = new User('廖乐乐')
//输出类中的属性
console.log(user.name)
//调用类中的方法
user.study()
