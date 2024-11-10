const Order = require("../models/Order");
const fs = require("fs");

const orders = [
  {
    _id: "66f6b863778cee45450e921f",
    user: "66f639d5f35f6ece4a5b02bf",
    item: [
      {
        _id: "66f693389ad29c93a928b2dc",
        user: "66f639d5f35f6ece4a5b02bf",
        product: {
          _id: "66f65deb9ad29c93a928b26f",
          title: "Alexandre Christie AC 2B34 LDR Watch for Women – Black",
          description:
            "Merging form with function, this chronograph watch by Alexandre Christie lends you a modish look. The round-shaped dial is secured by a mineral glass and is encased in a 35 mm case. It is water resistant up to 30 m and is completed with a buckle clasp to ensure a secure fit on the wrist.",
          price: 20,
          discountPercentage: 2,
          category: "66f6567b972f1e40f3efe8ca",
          brand: {
            _id: "66f65d9a6487e3a8fbb927d5",
            name: "Testing Brand",
          },
          stockQuantity: 47,
          thumbnail:
            "https://dashdrop-setup.s3.ap-south-1.amazonaws.com/ATHLETE-WEBSITE/PRODUCTS/FORZA+STOPWATCH/forza_stopwatch_usp2.jpg",
          images: [
            "https://dashdrop-setup.s3.ap-south-1.amazonaws.com/ATHLETE-WEBSITE/PRODUCTS/FORZA+STOPWATCH/forza_stopwatch_usp2.jpg",
            "https://dashdrop-setup.s3.ap-south-1.amazonaws.com/ATHLETE-WEBSITE/PRODUCTS/FORZA+STOPWATCH/forza_stopwatch_usp2.jpg",
            "https://dashdrop-setup.s3.ap-south-1.amazonaws.com/ATHLETE-WEBSITE/PRODUCTS/FORZA+STOPWATCH/forza_stopwatch_usp2.jpg",
            "https://dashdrop-setup.s3.ap-south-1.amazonaws.com/ATHLETE-WEBSITE/PRODUCTS/FORZA+STOPWATCH/forza_stopwatch_usp2.jpg",
          ],
          isDeleted: false,
          createdAt: "2024-09-27T07:25:31.746Z",
          updatedAt: "2024-09-27T13:40:27.797Z",
        },
        quantity: 1,
      },
    ],
    address: [
      {
        user: "66f639d5f35f6ece4a5b02bf",
        street: "!!, mahavishnu nagar, ponniammanmedu, chennai - 99",
        city: "chennai",
        state: "Tamil Nadu",
        phoneNumber: "8825464712",
        postalCode: "600110",
        country: "india",
        type: "Home",
        _id: "66f6b859778cee45450e921d",
        __v: 0,
      },
    ],
    status: "Dispatched",
    paymentMode: "COD",
    total: 30.55,
    createdAt: "2024-09-27T13:51:31.898Z",
  },
];

exports.seedOrder = async () => {
  try {
    await Order.insertMany(orders);
    console.log("Order seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
