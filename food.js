const _ = require("lodash");

const meal = { "kebab": "roll", "burger": "pizza", "lasagna": "pasta" };

const food = _.invert(meal);

module.exports = food;

