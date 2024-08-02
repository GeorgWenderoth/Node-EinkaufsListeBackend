const groceryService = require('../services/groceryService.js');

exports.getAllGroceryElements = async (req, res) => {
  console.log("api called");
  try {
    const grocerys = await groceryService.getAllGrocerys();
    res.json(grocerys);
  } catch (err) {
    res.status(500).json({ message: err.message});
  }
};

exports.createGrocery = async (req, res) => {
  try {
    const grocery = await groceryService.createGrocery(req.body);
    res.status(201).json(grocery)
  } catch (err) {
    res.status(500).json({ message: err.message }); 
  }
};
