// let heroes = [
//     ["ironman","spiderman","thor"],["superman","wonderwoman","flash"]
// ];

// for(let i=0; i<heroes.length; i++){
//     console.log(i,heroes[i],heroes[i].length);  //outer
//     for(let j=0; j<heroes[i].length; j++) {
//         console.log(`j=${j}, ${heroes[i][j]}`);   //inner 
//     }
// }


let student = [["aman",95], ["shradha",94.4],["karan",100]];
for(let i=0; i<student.length; i++) {
    console.log(`info of student #${i}`)
    for(let j=0; j<student[i].length; j++){
        console.log(student[i][j]);
    }
}