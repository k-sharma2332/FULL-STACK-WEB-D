// A string is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5.
// For a given string print if it is golden or not.
let Name = "Apples";

if ((Name[0]=='a'||Name[0]=='A')&&(Name.length>5)){
    console.log("Golden String");
}
else{
    console.log("Not a golden string");
}