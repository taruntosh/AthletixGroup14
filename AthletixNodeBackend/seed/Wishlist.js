const Wishlist = require("../models/Wishlist");

const wishlistItem = [
  {
    _id: "66f7fb654e6c9716353205c4",
    user: "66f639d5f35f6ece4a5b02bf",
    product: "66f65deb9ad29c93a928b26f",
    createdAt: "2024-09-28T12:49:41.433Z",
    updatedAt:  "2024-09-28T12:49:41.433Z",
  },
];

exports.seedWishlist = async () => {
  try {
    await Wishlist.insertMany(wishlistItem);
    console.log("Wishlist seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
