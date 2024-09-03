const favMovie = "avatar";

let guess = prompt("guess my favorite movie");
//while((guess!=favMovie)&&(guess!="quit"))
while(guess!=favMovie){
    // we use break statement
    if(guess == "quit"){
        console.log("you quit");
        break;
    }
    guess = prompt("wrong guess pleaase try again");
}
if(guess == favMovie){
    console.log("congrats!");
}else{
    console.log("you quit");
}