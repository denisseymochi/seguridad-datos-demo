require('dotenv').config();
const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    const secret = process.env.SECRET_API_KEY || "No definida";
    res.json({ message: "Dato protegido accedido correctamente", key: secret });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});
