const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const search = "ab";
  const products = await Product.find({
    name: { $regex: search, $options: "i" },
  });
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name } = req.query; // destructure from query string
  const queryObject = {}; //init new empty obj

  // add featured key to queryObject and set string value to boolean
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  // add company key to queryObject and set value
  if (company) {
    queryObject.company = company;
  }
  // add name key to queryObject and set $regex value
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  // find(queryObject)
  const products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
