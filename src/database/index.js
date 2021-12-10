import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import Foto from '../models/Foto';
import Usuario from '../models/Usuario';
import Perfil from '../models/Perfil';

const models = [Aluno, Foto, Usuario, Perfil];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

models.forEach((model) => model.associate && model.associate(connection.models));
