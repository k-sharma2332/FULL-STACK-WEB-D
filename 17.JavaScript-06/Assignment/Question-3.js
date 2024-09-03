// Write a js function that accepts a list a list of country names as input and returns the longest country name as ouput.
// Ex- country = ["Australia","germany","united states of america"] ouput: "united states of america".

let country = ["Australia","germany","united states of america"];
function listCountry(country){
    let ansIdx = 0;
    for(let i=0; i<country.length; i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen>ansLen){
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
longest(country);
