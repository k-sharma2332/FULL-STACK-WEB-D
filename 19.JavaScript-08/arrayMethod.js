// let arr = [1,2,3,4,5];

// arr.forEach( (el) => {
//     console.log(el);
// });
// arr.forEach(function (el){
//     console.log(el);
// });



// // let print = function(el) {
// //     console.log(el);
// // };

// // arr.forEach(print);

let arr = [{
    name : "rajat",
    marks : 95
},{
    name : "shraddha",
    marks : 92
},{
    name : "khushi",
    marks : 95
}];
arr.forEach((student) => {
    console.log(student.marks);
});