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

const Order = mongoose.model("Order", orderSchema);
const customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
    let cust1 = new customer({
        name: "Rahul Kumar",
    });
    let order1 = await Order.findOne({ item: "Chips" });
    let order2 = await Order.findOne({ item: "Chocolate" });
    cust1.order.push(order1);
    // cust2.order.push(order2);

    let result = await cust1.save();
    console.log(result);

};
addCustomer();

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