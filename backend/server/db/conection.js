const mongoose = require("mongoose");

const url = "mongodb+srv://raza:Abc12345@cluster0.ykrdr8w.mongodb.net/web"; 
const dbConnection = async () => {
    try {
        await mongoose.connect(url);
        console.log("Database Connected");
    } catch (error) {
        console.log("Failed to connect to the database");
    }   
};

module.exports = dbConnection; 





