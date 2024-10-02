const Product = require("../models/Product");

const products = [
  {
    _id: "66f65deb9ad29c93a928b26f",
    title: "Alexandre Christie AC 2B34 LDR Watch for Women – Black",
    description:
      "Merging form with function, this chronograph watch by Alexandre Christie lends you a modish look. The round-shaped dial is secured by a mineral glass and is encased in a 35 mm case. It is water resistant up to 30 m and is completed with a buckle clasp to ensure a secure fit on the wrist.",
    price: 20,
    discountPercentage: 2,
    category: "66f6567b972f1e40f3efe8ca",
    brand: "66f65d9a6487e3a8fbb927d5",
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
    createdAt:"2024-09-27T07:25:31.746Z",
    updatedAt: "2024-09-27T13:40:27.797Z",
  },
  {
    _id: "66f7ee1c4e6c971635320369",
    title: "Samsung 108 cm (43 inches) ",
    description:
      "Resolution: 4K Ultra HD (3840 x 2160) Resolution |Refresh Rate : 50 Hertz\nConnectivity : 3 Hdmi Ports For Seamless Connectivity With External Devices | 1 X Usb-A Usb Ports To Connect Hard Drives Or Other Usb Devices |Wi-Fi | Bluetooth | Anynet+ (Hdmi-Cec)| Ethernet (Lan) Port| Rf In (Terrestrial / Cable Input / Satellite Input)\nSound: 20W Output- 2CH | Powerful Speakers with Q-Symphony\nSmart TV Features : Bixby | Web Browser | SmartThings Hub / Matter Hub / IoT-Sensor FuntionalityApple AirPlay | Daily+",
    price: 28990,
    discountPercentage: 10,
    category: "66f7ec9f3e85b941934e2f2d",
    brand: "66f7ec953e85b941934e2f2b",
    stockQuantity: 50,
    thumbnail:
      "https://dashdrop-setup.s3.ap-south-1.amazonaws.com/ATHLETE-WEBSITE/PRODUCTS/Samsung+TV/tvMain.jpg",
    images: [
      "https://dashdrop-setup.s3.ap-south-1.amazonaws.com/ATHLETE-WEBSITE/PRODUCTS/Samsung+TV/tvMain.jpg",
      "https://dashdrop-setup.s3.ap-south-1.amazonaws.com/ATHLETE-WEBSITE/PRODUCTS/Samsung+TV/tv3.jpg",
    ],
    isDeleted: false,
    createdAt:  "2024-09-28T11:53:00.061Z",
    updatedAt: "2024-09-28T11:53:00.061Z",
  }
];

exports.seedProduct = async () => {
  try {
    await Product.insertMany(products);
    console.log("Product seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
