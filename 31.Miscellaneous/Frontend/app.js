// function Personmaker(name,age){
//     const person = {
//         name : name,
//         age : age,
//         talk() {
//             console.log(`Hi , my name is ${this.name}`);
//         },
//     };
//     return person;
// }


// constructor - doesn't return anything & start wit capital
// function Person(name,age){
//    this.name = ame;
//    this.age = age; 
// }


class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi , I am ${this.name}`);
    }
}



class Student {
    constructor(name,age,marks){
        this.name = name;
        this.age = age;
        this.marks= marks;
    }
    talk(){
        console.log(`Hi , I am ${this.name}`);
    }
}


class Teacher {
    constructor(name,age,marks){
        this.name = name;
        this.age = age;
        this.marks= marks;
    }
    talk(){
        console.log(`Hi , I am ${this.name}`);
    }
}
  