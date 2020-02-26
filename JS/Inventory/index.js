class Student {
constructor(name, age){
this.name = name;
this.age = age;
}
sayHello() {
console.log("Hello, front-end!");
}
}
class FrontEndStudent extends Student {
}
const tSwift = new FrontEndStudent("Taylor Swift", 30);