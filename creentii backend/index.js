const mongoose = require('mongoose');
const app = require('./app');
const port = 3000;


mongoose.connect('mongodb://localhost:27017/creentii', { useNewUrlParser: true, useUnifiedTopology: true }, (error, res) => {
    if (error) {
        console.log("Error de coneccion", error);

    } else {
        console.log("Nos conectamos correctamente...");
        app.listen(port, () => {
            console.log('Conectado al puerto', port)
        })
    }

})