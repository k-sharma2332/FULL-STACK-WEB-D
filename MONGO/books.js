const mongoose = require("mongoose");


main().then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        maxLength:20,
    },
    author: {
        type:String
    },
    price:{ 
        type: Number,
        min : [1,"Price is too low for sell"]
    },
    discount : {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum:["fiction","non-fictio"],
    },
    genre : [String]
});

const Book = mongoose.model("Book",bookSchema);

Book.findByIdAndUpdate("66b8df3c99f5da417ac9534b" , {price: -500},{runValidators:true})
.then((res) => {
    console.log(res);
}).catch((err) =>{
    console.log(err.errors.price.properties.message/);
});

// let book1 = new Book({
//     title: "Marvel Comics",
//     price: 500,
//     genre:["comics","superheroes","fiction"]
    
// });

// book1.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });