// write a javascript program that return array elements larger than a number.

let arr = [2,4,6,8,9,3];

let num = 5;

function getElement(arr,num) {
    for(let i=0; i<arr.length ;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
getElement(arr,num);