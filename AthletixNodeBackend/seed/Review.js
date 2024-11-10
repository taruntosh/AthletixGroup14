const Review = require("../models/Review");

const reviews = [
  {
    _id: "66f6b81c778cee45450e921a",
    user: "66f639d5f35f6ece4a5b02bf",
    product: "66f65deb9ad29c93a928b26f",
    rating: 4,
    comment: "Good Product",
    createdAt: "2024-09-27T13:50:20.560Z",
  },
];

exports.seedReview = async () => {
  try {
    await Review.insertMany(reviews);
    console.log("Review seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
