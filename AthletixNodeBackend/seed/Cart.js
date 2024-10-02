const Cart = require("../models/Cart");

const cartItems = [
  {
    _id: "66f9484da133871165da35ae",
    user: "66f639d5f35f6ece4a5b02bf",
    product: "66f65deb9ad29c93a928b26f",
    quantity: 1,
  },
];

exports.seedCart = async () => {
  try {
    await Cart.insertMany(cartItems);
    console.log("Cart seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
