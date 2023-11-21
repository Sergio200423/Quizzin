import bodyParser from "body-parser";
import ejs from "ejs";
import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    host: 'localhost',
    port: 5432,
    database: 'Quizzin',
    password: '123456',
    user: 'postgres'
  });

db.connect();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get("/", (req,res) =>{
    res.render("index.ejs");
});

app.get("/register", async (req,res) =>{
    res.render("register.ejs");

});

app.get("/login", (req,res) =>{
    res.render("login.ejs");
});

app.post("/register", async (req,body)=>{
    const nombreUsuario = req.body.nombre;
    const correo = req.body.correo;
    const contra = req.body.contrasena;

    await db.query("INSERT INTO usuario(nombreUsuario, correo, contra) VALUES($1, $2, $3)", [nombreUsuario, correo, contra]);
});
app.listen(port, ()=>{
    console.log("conectado");
});