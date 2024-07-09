// let num = [1,2,3,4];

// let double = num.map((el) => {
//     return el*2;
// });

let students = [{
    name : "rajat",
    marks : 95
},{
    name : "shraddha",
    marks : 92
},{
    name : "khushi",
    marks : 95
}];
// students.forEach((student) => {
//     console.log(student.marks);
// });


let gpa = students.map((el) => {
    return el.marks/10;
});