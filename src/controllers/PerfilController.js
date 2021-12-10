import Perfil from '../models/Perfil';

class PerfilController {
  async index(req, res) {
    try {
      const perfis = await Perfil.findAll({ attributes: ['id', 'perfil'] });
      return res.json(perfis);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new PerfilController();
