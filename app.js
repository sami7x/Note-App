require('dotenv').config();

//importing modules
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { use } = require('passport');

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//static files
app.use(express.static("public"));

//Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine","ejs");

//routes
app.use("/", require("./server/routes/index"));

app.listen(port,()=> {
    console.log(`App listening on port ${port}`);
});

