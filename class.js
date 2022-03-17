class Student{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.School = "RM Academy";
    }
}

const student1 = new Student(200110, "Mithu");
const student2 = new Student(200124, "Ruddro");
console.log(student1, student2);