const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.resolve(__dirname,"./public")));

app.post('/home', (req, res) => {
    console.log(req.body)
    res.sendFile('./home.html', { root: 'views' })
});


app.get('/', function (req, res) {
 res.sendFile(path.resolve(__dirname, './views/home.html'));
});


app.get("/carrito", (req, res) => {
    res.status(200).sendFile("carrito.html", { root: "views" });
});

app.get("/register", (req, res) => {
    res.status(200).sendFile("register.html", { root: "views" });
});

app.get("/login", (req, res) => {
    res.status(200).sendFile("login.html", { root: "views" });
});

app.listen(PORT,function(){
    console.log("Servidor listo");
});

