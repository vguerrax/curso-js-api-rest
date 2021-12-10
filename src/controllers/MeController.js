import Usuario from '../models/Usuario';

class MeController {
  async show(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.userId, { attributes: ['id', 'nome', 'email', 'perfil_id', 'created_at', 'updated_at'] });
      if (!usuario) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }

      return res.json(usuario);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.userId);
      if (!usuario) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }

      if (req.body.perfil_id && usuario.perfil_id !== 1) {
        return res.status(403).json({
          errors: ['Nessecário permissão de administrador para alterar o perfil.'],
        });
      }

      await usuario.update(req.body, {});
      const {
        id, nome, email, perfil_id, created_at, updated_at,
      } = usuario;
      return res.status(200).json({
        id, nome, email, perfil_id, created_at, updated_at,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.userId);
      if (!usuario) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }
      await usuario.destroy();
      return res.status(204).json();
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new MeController();
