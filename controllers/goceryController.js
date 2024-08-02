const groceryService = require('../services/groceryService.js');

exports.getAllGroceryElements = async (req, res) => {
  try {
    const grocerys = await groceryService.getAllGroceryElements();
    res.json(grocerys);
  } catch (err) {
    res.status(500).json({ message: err.message});
  }

};


