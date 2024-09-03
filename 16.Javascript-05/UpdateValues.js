const student = {
    name: "shardha",
    age:23,
    marks:94.4,
    city:"Delhi"
};

console.log(student);

// to update values
console.log(student.city);
console.log("after update")
console.log(student.city="mumbai");

// to add new property
student.gender = "female";
console.log(student.gender);

student.marks = "A";
console.log(student.marks);

console.log(student);

// to delete 
delete student.marks;
console.log(student);
