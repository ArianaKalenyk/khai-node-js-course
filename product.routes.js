const express = require("express");
const products = require("./products");
const { blockSpecialBrand } = require("./middleware");

const router = express.Router();

// handle get request for path /products
router.get("/products", (request, response) => {
  return response.json(products);
});

// handle get request for path /products/:brand
router.get("/products/:brand", blockSpecialBrand, (request, response) => {
  const { brand } = request.params; // Access the brand parameter from the URL

  // Filter products based on the brand parameter
  const filteredProducts = products.filter(
    (product) => product.brand === brand
  );

  response.json(filteredProducts); // Send the filtered products as a JSON response
});
router.get("/products/id/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === parseInt(id));

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

router.get("/productswitherror", (request, response) => {
  let err = new Error("processing error ");
  err.statusCode = 400;
  throw err;
});

module.exports = router;
