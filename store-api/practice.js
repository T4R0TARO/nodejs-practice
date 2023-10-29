const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  // const search = "ab";
  // const products = await Product.find({
  //   name: { $regex: search, $options: "i" },
  // });

  // Task: Sort Feature
  // Sort through json data by name and price
  const products = await Product.find({})
    .sort("name") // sort by name
    .select("name price"); // select name and price
  // .limit(10) // limit items to 10
  // .skip(5) // skip 5 items from item list
  res.status(200).json({ products, nbHits: products.length });
};

// Task: Sort Feature
// Sort through json data based on query
// localhost:3000/api/v1/products?sort=name,price
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query; // destructure `sort` from query string
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

  // if `fields` is in the query
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result; // after conditional await results
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
