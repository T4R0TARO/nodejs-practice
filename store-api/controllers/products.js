const Product = require("../models/product");

/**
 * Why no `try/catch` ??
 * We implemented a npm package `express-async-errors` that handles errors for us
 * Now we can write cleaner async function()
 */

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort("-name price");
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query; // destructure from query
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false; //change string to boolean
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  console.log(req.query);
  // { featured: 'true', company: 'ikea', name: 'a' }
  // console.log(queryObject);
  /* 
    {
      featured: true,
      company: 'ikea',
      name: { '$regex': 'a', '$options': 'i' }
    }
  */

  let result = Product.find(queryObject);
  if (sort) {
    // products = products.sort()
    // console.log(sort);
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
