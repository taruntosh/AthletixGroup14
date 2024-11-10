const User = require("../models/User");

const users = [
  {
    _id: "66f639d5f35f6ece4a5b02bf",
    name: "Nivas",
    email: "nivasnivi67@gmail.com",
    password: "$2a$10$woiXS1/uukTAE4.x1MYgeuMfD5j0DkUTB/eJDwx4Eu4zqOiyXWWD.",
    isVerified: true,
    isAdmin: false,
    __v: 0,
  },
];

exports.seedUser = async () => {
  try {
    await User.insertMany(users);
    console.log("User seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
