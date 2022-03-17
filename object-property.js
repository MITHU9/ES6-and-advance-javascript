const student = [
    {id: 10, name: 'mithu'},
    {id: 11, name: "ruddro"},
    {id: 12, name: "marsel"},
    {id: 13, name: "sakib"}
]
// const newArray = [];


//     for(let i = 0; i < student.length; i++){
//        const element = student[i];
//        const nameArray = element.name;
//        newArray.push(nameArray);
//     }
//    console.log(newArray);

const nameArray = student.map(s => s.name);
console.log(nameArray);