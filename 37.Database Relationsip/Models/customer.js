const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() =>
        console.log("connection successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    order: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        },
    ],
});

// customerSchema.pre("findOneAndDelete",async () =>{
//     console.log("PRE MIDDLEWARE");
// })
//--err--
// customerSchema.post("findOneAndDelete",async(customer) =>{
//    if(customer.orders.length) {
//    let result = await Order.deleteMany({_id: {$in: customer.orders}})
//    console.log(result);
//    }
// });


const Order = mongoose.model("Order", orderSchema);
const customer = mongoose.model("Customer", customerSchema);


// function
const findCustomer = async () => {
    let result = await customer.find({}).populate("order");
    console.log(result[0]);
};

const addCust = async() =>{
    let newCust = new customer({
        name:"karan",
    });

 
let newOrder = new Order ({
    item: "pizza",
    price: 250,
});

newCust.order.push(newOrder);

await newOrder.save();
await newCust.save();

console.log("added new customer");
};

const delCust = async() =>{
    let data = await customer.findByIdAndDelete('66c9cf5fb86167422d2e7efc');
    console.log(data);
}

delCust();
//addCust();



// const addCustomer = async () => {
//     let cust1 = new customer({
//         name: "Rahul Kumar",
//     });
//     let order1 = await Order.findOne({ item: "Chips" });
//     let order2 = await Order.findOne({ item: "Chocolate" });
//     cust1.order.push(order1);
//     // cust2.order.push(order2);

//     let result = await cust1.save();
//     console.log(result);

// };
// addCustomer();

// const addOrders = async () =>{
//     await Order.insertMany([
//         { item: "Pastry",
//             price:40
//         },
//         { item: "Chips" , price:20},
//         {
//             item: "Chocolate",price:80
//         },
//     ]);
//     console.log(res);
// };

// addOrders();