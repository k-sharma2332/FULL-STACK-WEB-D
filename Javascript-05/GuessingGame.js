const max = prompt("Enter the max number");
// console.log(max);

const random = Math.floor(Math.random()*max)+1;
// console.log(random);

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess==random){
        console.log("you are right! congrats!! random number was",random);
        break;
    }
    else if(guess<random){
        guess = prompt("Hint: your guess was too small. please try again");
    }
    else{
        guess = prompt("Hint: your guess was too large. please try again");
    }
    // else{
    //     guess = prompt("your guess is wrong. please try again")
    // }
}