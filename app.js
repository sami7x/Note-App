require('dotenv').config();

//importing modules
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./server/config/db"); 

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//connect to db
connectDB();

//static files
app.use(express.static("public"));

//Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine","ejs");

//routes
app.use("/", require("./server/routes/index"));
app.use("/", require("./server/routes/dashboard"));

//404 Page Not Found
app.get("*", function(req,res)
{
    // res.status(404).send("404 page not found");
    res.status(404).render("404");
});

app.listen(port,()=> {
    console.log(`App listening on port ${port}`);
});

