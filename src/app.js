import { resolve } from 'path';

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import './database';
import homeRoutes from './routes/homeRoutes';
import tokenRoutes from './routes/tokenRoutes';
import perfilRoutes from './routes/perfilRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import meRoutes from './routes/meRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

dotenv.config();

const whiteList = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://167.172.142.10',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) callback(null, true);
    else callback(new Error('Not allowed by CORS'));
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/api-rest/v2', homeRoutes);
    this.app.use('/api-rest/v2/auth/token', tokenRoutes);
    this.app.use('/api-rest/v2/perfis', perfilRoutes);
    this.app.use('/api-rest/v2/usuarios', usuarioRoutes);
    this.app.use('/api-rest/v2/me', meRoutes);
    this.app.use('/api-rest/v2/alunos', alunoRoutes);
    this.app.use('/api-rest/v2/fotos', fotoRoutes);
  }
}

export default new App().app;
