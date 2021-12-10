import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Autorização requerida.'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const usuario = await Usuario.findOne({ where: { id, email } });
    if (!usuario) {
      return res.status(401).json({
        errors: ['Token inválido.'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    req.userPerfil = usuario.perfil_id;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token inválido.'],
    });
  }
};
