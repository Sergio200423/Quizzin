import bodyParser from "body-parser";
import ejs from "ejs";
import express from "express";
import pg from "pg";


const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get("/", (req,res) =>{
    res.render("index.ejs");
});

app.get("/register", (req,res) =>{
    res.render("register.ejs");
});

app.get("/login", (req,res) =>{
    res.render("login.ejs");
});


app.listen(port, ()=>{
    console.log("conectado");
});