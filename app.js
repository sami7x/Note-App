require('dotenv').config();

//importing modules
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

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

app.get("/", function(req,res){
//for dynamic title
const locals = {
    title: "Notes App",
    description: "Free Notes Application"
}
    res.render("index", locals);
});

app.listen(port,()=> {
    console.log(`App listening on port ${port}`);
});

