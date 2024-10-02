const Category = require("../models/Category");

const categories = [
  {
    _id: "66f6567b972f1e40f3efe8ca",
    name: "Barbell",
    __v: 0,
  },
  {
    _id: "66f7ec9f3e85b941934e2f2d",
    name: "Dumbell",
    __v: 0,
  },
];

exports.seedCategory = async () => {
  try {
    await Category.insertMany(categories);
    console.log("Category seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
