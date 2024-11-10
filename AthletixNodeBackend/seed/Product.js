const Product = require("../models/Product");

const products = [
  {
    _id: "66f65deb9ad29c93a928b26f",
    title: "Nike Elite Volleyball - Indoor/Outdoor",
    description:
      "The Nike Elite Volleyball is designed for both indoor and outdoor play. Its soft-touch cover and optimal grip pattern provide excellent control for players of all levels. Durable and built for long-lasting performance, this volleyball is perfect for intense training sessions or casual games.",
    price: 40,
    discountPercentage: 5,
    category: "66f6567b972f1e40f3efe8ca",
    brand: "66f65d9a6487e3a8fbb927d5",
    stockQuantity: 30,
    thumbnail:
      "https://dashdrop-setup.s3.ap-south-1.amazonaws.com/ATHLETE-WEBSITE/PRODUCTS/Nike_Volleyball/volleyball_main.jpg",
    images: [
      "https://dashdrop-setup.s3.ap-south-1.amazonaws.com/ATHLETE-WEBSITE/PRODUCTS/Nike_Volleyball/volleyball_main.jpg",
      "https://dashdrop-setup.s3.ap-south-1.amazonaws.com/ATHLETE-WEBSITE/PRODUCTS/Nike_Volleyball/volleyball_side.jpg",
      "https://dashdrop-setup.s3.ap-south-1.amazonaws.com/ATHLETE-WEBSITE/PRODUCTS/Nike_Volleyball/volleyball_detail.jpg",
    ],
    isDeleted: false,
    createdAt: "2024-09-27T07:25:31.746Z",
    updatedAt: "2024-09-27T13:40:27.797Z",
  },
  {
    _id: "66f7ee1c4e6c971635320369",
    title: "Adidas Adjustable Dumbbells Set - 20kg",
    description:
      "The Adidas Adjustable Dumbbells Set offers a versatile workout for all fitness levels. With easy weight adjustments, this set is perfect for strength training, muscle building, and toning exercises. Ergonomically designed handles provide a secure grip for optimal performance.",
    price: 150,
    discountPercentage: 8,
    category: "66f7ec9f3e85b941934e2f2d",
    brand: "66f7ec953e85b941934e2f2b",
    stockQuantity: 25,
    thumbnail:
      "https://dashdrop-setup.s3.ap-south-1.amazonaws.com/ATHLETE-WEBSITE/PRODUCTS/Adidas_Dumbbells/dumbbells_main.jpg",
    images: [
      "https://dashdrop-setup.s3.ap-south-1.amazonaws.com/ATHLETE-WEBSITE/PRODUCTS/Adidas_Dumbbells/dumbbells_main.jpg",
      "https://dashdrop-setup.s3.ap-south-1.amazonaws.com/ATHLETE-WEBSITE/PRODUCTS/Adidas_Dumbbells/dumbbells_side.jpg",
      "https://dashdrop-setup.s3.ap-south-1.amazonaws.com/ATHLETE-WEBSITE/PRODUCTS/Adidas_Dumbbells/dumbbells_detail.jpg",
    ],
    isDeleted: false,
    createdAt: "2024-09-28T11:53:00.061Z",
    updatedAt: "2024-09-28T11:53:00.061Z",
  },
];

exports.seedProduct = async () => {
  try {
    await Product.insertMany(products);
    console.log("Product seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
