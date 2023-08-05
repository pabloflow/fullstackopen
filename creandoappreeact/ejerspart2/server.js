const express = require('express');
const cors = require('cors'); // Importa el paquete 'cors'
const fetch = require('node-fetch'); // Instala node-fetch con: npm install node-fetch

const app = express();
const port = 5000; // Puedes cambiar el puerto si es necesario

const access_key = "b87954d38898e00396fed57eee73efae"; // Tu clave de acceso de Weatherstack

app.use(cors());

app.get('/weather', (req, res) => {
  const query = req.query.query || "london"
  // Realiza la solicitud a la API de Weatherstack desde el servidor
  fetch(`http://api.weatherstack.com/current?access_key=${access_key}&query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      // Envía los datos de Weatherstack como respuesta al cliente (frontend)
      res.json(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: 'Error fetching data' });
    });
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});