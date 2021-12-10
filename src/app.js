import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';

import './database';
import homeRoutes from './routes/homeRoutes';
import tokenRoutes from './routes/tokenRoutes';
import perfilRoutes from './routes/perfilRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import meRoutes from './routes/meRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/auth/token', tokenRoutes);
    this.app.use('/perfis', perfilRoutes);
    this.app.use('/usuarios', usuarioRoutes);
    this.app.use('/me', meRoutes);
    this.app.use('/alunos', alunoRoutes);
    this.app.use('/fotos', fotoRoutes);
  }
}

export default new App().app;
