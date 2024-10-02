const Address = require("../models/Address");

const addresses = [
  {
    _id: "66f9452c519f225cd7ef883b",
    user: "66f639d5f35f6ece4a5b02bf",
    street: "street",
    city: "city",
    state: "state",
    phoneNumber: "0000000000",
    postalCode: "000000",
    country: "country",
    type: "type",
    __v: 0
  }
];

exports.seedAddress = async () => {
  try {
    await Address.insertMany(addresses);
    console.log("Address seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
