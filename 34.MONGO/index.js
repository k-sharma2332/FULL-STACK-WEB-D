const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test");

main().then((res) => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    age:Number,
});

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete('66b858e6ec7393b10f89e47c').then((res)=>{
  console.log(res);
});``

// User.findOneAndUpdate({name:"bruce"},{age:65},{new:true})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });



// User.find({age:{$gt:47}}).then(res =>{
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });


// User.insertMany([
//   {name:"tony",email:"tony@gmail.com",age:50},
//   {name:"peter",email:"peter@gmail.com",age:30},
//   {name:"bruce",email:"bruce@gmail.com",age:56},
// ]).then(res =>{console.log(res);

// });
// const user2 = new User({
//   name: "Eve",
//   email: "eve@email.in",
//   age: 46,
// });

// user2.save().then((res) => {
//   console.log(res);
// })
// .catch((err) =>{
//   console.log(err);
// });