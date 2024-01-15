//importing modules
const mongoose = require("mongoose");
// Refresh the query and takes less time to save notes into the database
mongoose.set("strictQuery", false);
const connectDB =async() =>
{
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(
            `Databse Connected succesfully: 
            ${connect.connection.host}`
        );
    }
    catch(error)
    {
        console.log(error);
    }
};
module.exports = connectDB;