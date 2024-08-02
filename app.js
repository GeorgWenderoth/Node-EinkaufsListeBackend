const express = require('express'); 
const app = express(); 
const groceryRoutes = require("./routes/goceryRoutes")

//Middleware , pased json into javasript object
app.use(express.json)

        //was kommt hier hin, weil ich ja keien extra path habe?
app.use('/', groceryRoutes);

//Starten des servers           //welchen port will ich?
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log('Server running on Port ${PORT}');
});
