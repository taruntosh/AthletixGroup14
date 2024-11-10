const Address = require("../models/Address");

const addresses = [
  {
    _id: "66f9452c519f225cd7ef883b",
    user: "66f639d5f35f6ece4a5b02bf",
    street: "no:11,mahavishnu nagar,",
    city: "Tiruvallur",
    state: "Tamil Nadu",
    phoneNumber: "8825464712",
    postalCode: "600110",
    country: "India",
    type: "Business",
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
