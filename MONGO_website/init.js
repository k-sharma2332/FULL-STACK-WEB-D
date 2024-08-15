const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
.then(()=>{
    console.log("connection successful");
})
.catch((err) => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

Chat.insertMany([
    
])

let allChats = [
    {
        from: "nehs",
        to: "sneha",
        msg:"send me notes",
        created_at: new Date() ,
    },
    {
        from: "Virat",
        to: "Preeti",
        msg:"teach me js",
        created_at: new Date() ,
    },
    {
        from: "Virat",
        to: "sumit",
        msg:"teach me html",
        created_at: new Date(),
    },
    {
        from: "shraddha",
        to: "Aman",
        msg:"send me you js notes",
        created_at: new Date() ,
    },
     {
        from: "Nia",
        to: "Shreya",
        msg:"Give me your id",
        created_at: new Date() ,
    },
];


Chat.insertMany(allChats);