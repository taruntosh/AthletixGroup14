const Brand = require("../models/Brand");

const brands = [
  {
    _id: "66f65d9a6487e3a8fbb927d5",
    name: "Nike",
  },
  {
    _id: "66f7ec953e85b941934e2f2b",
    name: "Adidas",
  },
];

exports.seedBrand = async () => {
  try {
    await Brand.insertMany(brands);
    console.log("Brand seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
