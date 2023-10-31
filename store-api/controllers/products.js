const Product = require("../models/product");

/**
 * Why no `try/catch` ??
 * We implemented a npm package `express-async-errors` that handles errors for us
 * Now we can write cleaner async function()
 */

const getAllProductsStatic = async (req, res) => {
  // * manual search
  // const search = 'ab';
  // const products = await Product.find({
  //   name: {$regex: search, $options: 'i'},
  // })

  const products = await Product.find({ price: { $gt: 30 } }) // display items where price is MORE than 30
    .sort("price")
    .select("name price");
  // .limit(10)
  // .skip(5);
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query; // destructure from query
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

  // * numericFilters
  if (numericFilters) {
    console.log(numericFilters); // price>40,rating>=4
    // query operators that mongoose can read ex. $gt : greater than
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    // reformat query string to mongoose syntax
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    console.log(filters); // price-$gt-40,rating-$gte-4 (reformated to mongoose syntax)

    const options = ["price", "rating"]; // options that use number values

    // reformat filters
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }
  console.log(queryObject); // { price: { '$gt': 40 }, rating: { '$gte': 4 } }

  // const products = await Product.find(queryObject)
  let result = Product.find(queryObject);

  // * sort
  if (sort) {
    // products = products.sort()
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  // * fields
  // if fields is  in query, only get rating and fields in the response
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }

  // * pages
  const page = Number(req.query.page) || 1; //change query to Number || default items to single page
  const limit = Number(req.query.limit) || 10; //change query to Number || default item limit to 10
  const skip = (page - 1) * limit; // skip page??? (2-1) * 10 = 10

  result = result.skip(skip).limit(limit);
  // 23 items
  // divided into 4 pages
  // 7 7 7 2

  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
