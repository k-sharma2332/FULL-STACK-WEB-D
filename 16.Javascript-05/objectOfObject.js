const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi",
    },

    shradha: {
        grade:"A",
        city:"Pune"
    },

    karan:{
        grade: "O",
        city:"Mumbai"
    }
};

console.log(classInfo);
console.log(classInfo.aman);
console.log(classInfo.shradha);
console.log(classInfo.shradha.city);
classInfo.shradha.city="gurgaon";
console.log(classInfo.shradha.city);
console.log(classInfo);