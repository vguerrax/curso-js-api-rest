export default (req, res, next) => {
  if (!req.userId) {
    return res.status(401).json({
      errors: ['Autorização requerida.'],
    });
  }

  try {
    if (req.userPerfil !== 1) {
      return res.status(403).json({
        errors: ['Necessário permissão de administrador.'],
      });
    }
    return next();
  } catch (e) {
    return res.status(403).json({
      errors: ['Necessário permissão.'],
    });
  }
};
