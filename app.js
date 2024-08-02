require('dotenv').config();
const express = require('express'); 
const app = express(); 
const groceryRoutes = require("./routes/goceryRoutes")

//Middleware , pased json into javasript object
app.use(express.json())

        
app.use('/', groceryRoutes);

//Starten des servers           
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log('Server running on Port ${PORT}');
});
