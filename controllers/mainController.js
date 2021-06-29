const controller = {
    index: (req, res) => {
        return res.render('index');
    },
    register: (req, res) => {
        return res.render('users/register');
    },
    login: (req, res) => {
        return res.render('users/login');
    },
    carrito: (req, res) => {
        return res.render('products/carrito');
    },
    producto: (req, res) => {
        return res.render('products/producto');
    },
    actualizar_producto: (req, res) => {
        return res.render('actualizar_producto');
    },
    cat_arte: (req, res) => {
        return res.render('products/cat_arte');
    }
}

module.exports = controller;