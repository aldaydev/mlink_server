import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './router';
import { connectDB } from './config/db';
import { corsConfig } from './config/cors';

// Conexión a la BD
connectDB();

// Inicialización de express
const app = express();

// Cors
app.use(cors(corsConfig));

// Leer datos de formularios
app.use(express.json());

// Health endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Router Global
app.use('/', router);


export default app;