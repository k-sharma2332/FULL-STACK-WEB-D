 let arr = [1,2,4,3,5,6,7,8,9,23,24,34,54];

// let max = -1;

// for(let i=0; i<arr.length; i++) {
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

let max = arr.reduce((max,el) => {
    if(max<el) {
        return el;
    }else {
        return max;
    }
});
console.log(max);

// default parameter
function sum(a , b = 2){  // default parameter   sum(a=2,b)--> this could be wrong.
    return a+b;
}