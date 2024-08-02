const express = require('express'); 
router = express.Router();
const groceryController = require('../controllers/goceryController');

router.get("/einkaufsListeElementeDone", groceryController.getAllGroceryElements);
    
router.post('/einkaufsListe', groceryController.createGrocery);


module.exports = router
