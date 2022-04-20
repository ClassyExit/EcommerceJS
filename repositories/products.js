const Repository = require("./repository");

// Used for products
class ProductsRepository extends Repository {}

module.exports = new ProductsRepository("products.json");
