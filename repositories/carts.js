const Repository = require("./repository");

// Used in shopping cart
class CartsRepository extends Repository {}

module.exports = new CartsRepository("carts.json");
