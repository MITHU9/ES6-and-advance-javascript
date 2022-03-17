class Parent{
   constructor(){
       this.fatherName = "Schwerznegger";
   }
}
class Student extends Parent{
    constructor(id, name){
       super();
       this.id = id;
       this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const child1 = new Student(10, "Arnold");
const child2 = new Student(11, "tom");
console.log(child1.getFullName());
console.log(child1, child2);