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

/*app.get('/producto', function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/producto.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});
app.get('/registro', function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/carrito', function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/carrito.html'));
});
*/
app.listen(PORT,function(){
    console.log("Servidor listo");
});

