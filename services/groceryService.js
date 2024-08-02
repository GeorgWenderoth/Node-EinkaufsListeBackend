const Grocery = require("../models/groceryModel");

exports.getAllGrocerys = async () => {
    return await Grocery.find();
};

exports.createGrocery = async(groceryData) => {
    const grocery = new Grocery(groceryData);
    return await grocery.save();
}; 