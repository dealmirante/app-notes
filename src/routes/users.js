const router = require('express').Router();

router.get('/users/signin', (req,res) => {
    res.send('Ingresando a la aplicacion');
});

router.get('/users/signup', (req,res) => {
    res.send('Formulario de Autenticacion');
});


module.exports = router;