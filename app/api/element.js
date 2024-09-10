// api/element.js
import axios from 'axios';
import bodyParser from 'body-parser';

// Asegúrate de procesar el cuerpo de la solicitud con body-parser
export default (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*'); // O reemplazar '*' con 'https://japiapp.com.mx' para mayor seguridad
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Si es una solicitud OPTIONS (preflight), responde con un 200 y termina
  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  bodyParser.json()(req, res, async () => {
    const API_KEY = '51bf211e-d68e-4a2c-af8e-d29d12173c3d'; // Reemplaza con tu clave API
    const LIST_ID = '84e54bf2-6f1a-11ef-8864-1fff41337fd8'; // Reemplaza con el ID de tu lista

    // Asegúrate de que el método sea POST
    if (req.method !== 'POST') {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: 'Método no permitido' }));
    }

    const { email, phone } = req.body;

    // Validar que los datos requeridos estén presentes
    if (!email || !phone ) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: 'Faltan datos requeridos' }));
    }

    try {
      const response = await axios.post(
        `https://emailoctopus.com/api/1.6/lists/${LIST_ID}/contacts`,
        {
          "api_key": API_KEY,
          "email_address": email
        }
      );

      // Respuesta exitosa
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(response.data));
    } catch (error) {
      res.writeHead(error.response?.status || 500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: error.message }));
    }
  });
};
