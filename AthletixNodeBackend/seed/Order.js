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
          title: "Nike Elite Volleyball - Indoor/Outdoor",
          description:
            "The Nike Elite Volleyball is designed for both indoor and outdoor play. Its soft-touch cover and optimal grip pattern provide excellent control for players of all levels. Durable and built for long-lasting performance, this volleyball is perfect for intense training sessions or casual games.",
          price: 40,
          discountPercentage: 5,
          category: "66f7ec9f3e85b941934e2f2d",
          brand: {
            _id: "66f65d9a6487e3a8fbb927d5",
            name: "Nike",
          },
          stockQuantity: 30,
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
        street: "789 Pinewood Crescent, Willowdale",
        city: "North York",
        state: "Ontario",
        phoneNumber: "6471234567",
        postalCode: "M2N 5X7",
        country: "Canada",
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
