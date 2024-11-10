const Address = require("../models/Address");

const addresses = [
  {
    _id: "66f9452c519f225cd7ef883b",
    user: "66f639d5f35f6ece4a5b02bf",
    street: "123 Maple Street",
    city: "Toronto",
    state: "Ontario",
    phoneNumber: "4161234567",
    postalCode: "M5H 2N2",
    country: "Canada",
    type: "Business",
    __v: 0,
  },
];

exports.seedAddress = async () => {
  try {
    await Address.insertMany(addresses);
    console.log("Address seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
