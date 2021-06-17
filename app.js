const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );



app.get('/', function (req, res) {
 res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/producto', function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/producto.html'));
});

app.get('/carrito', function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/carrito.html'));
});

const server = app.listen(3001, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
})
