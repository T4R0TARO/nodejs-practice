const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  // const search = "ab";
  // const products = await Product.find({
  //   name: { $regex: search, $options: "i" },
  // });

  // Task: Sort Feature
  // Sort through json data by name and price
  const products = await Product.find({}).sort("-name price"); // sort by name and price
  res.status(200).json({ products, nbHits: products.length });
};

// Task: Sort Feature
// Sort through json data based on query
// localhost:3000/api/v1/products?sort=name,price
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query; // destructure `sort` from query string
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  // const products = await Product.find(queryObject);
  let result = Product.find(queryObject); // refactored why? We want to run results through sorting conditional

  // if `sort` is in the query
  if (sort) {
    // console.log(sort); //-name,price
    // localhost:3000/api/v1/products?sort=name,price
    const sortList = sort.split(",").join(" "); //split sort string and join w/ space : -name price
    result = result.sort(sortList); // sort json data w/ name price
  } else {
    result = result.sort("createdAt"); // sort json data w/ "createdAt"
  }
  const products = await result; // after conditional await results
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
