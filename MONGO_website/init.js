
const mongoose = require(`mongoose`);
const path = require(`path`);
const chat = require(`./models/chat.js`);
const Chat = require("./models/chat.js");
const { LoremModule } = require("@faker-js/faker");

main().then(() => console.log(`\nConnection Successfull\n`))
.catch((error) => console.log(error));

async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/whatsapp`);
}

let Chats = [
    {
        From : "Khushi",
        To : "Kirti",
        Message : "Hey!",
        CreatedAt : new Date()
    },
    {
        From : "Veer",
        To : "Shreyas",
        Message : "Send me your pic",
        CreatedAt : new Date()
    },
    {
        From : "sheryas",
        To : "Kriti",
        Message : "What's going on bro!",
        CreatedAt : new Date()
    },
    {
        From : "Ruhi",
        To : "Virat",
        Message : "Send me your id ",
        CreatedAt : new Date()
    },
    
    {
        From : "Veer",
        To : "Virat",
        Message : "Hey! dude",
        CreatedAt : new Date()
    },
    
    {
        From : "Smriti",
        To : "Ritik",
        Message : "Hey!",
        CreatedAt : new Date()
    },
   
];

Chat.insertMany(Chats).then((result) => {
    console.log("\nData Entered Succesfully\n");
}).catch ((error) => {
    throw error;
});
