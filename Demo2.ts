// 静态类型  Static Typing
// 1. 只要静态类型定义了，以后的数据类型就不可以改变了
let count : number = 1;

// 自定义数据类型

interface Xiaojiejie {
    uname: string,
    age:number
}

const xiaohong:Xiaojiejie = {
    uname:'小红',
    age: 33
}

console.log(xiaohong)