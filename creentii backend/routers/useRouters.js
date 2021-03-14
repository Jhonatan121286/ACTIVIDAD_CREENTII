const express = require('express');
const UserController = require('../controller/userController')
const api = express.Router();

api.get('/obtener', (req, res) => {
    console.log("Obtenemos la ruta get...")

});


api.post('/', UserController.create);
api.put('/:idUser', UserController.update);
api.delete('/:idUser', UserController.remove);
api.get('/allUser', UserController.getAllUsers);





module.exports = api;