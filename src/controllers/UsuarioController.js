import Usuario from '../models/Usuario';

class UsuarioController {
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      return res.json(usuarios);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) return res.json({ error: 'id é parâmetro obrigatório.' });

      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        return res.status(400).json({
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

  async store(req, res) {
    try {
      const usuario = await Usuario.create(req.body);
      return res.status(201).json(usuario);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) return res.json({ error: 'id é parâmetro obrigatório.' });

      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }
      await usuario.update(req.body);
      return res.status(200).json(usuario);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) return res.json({ error: 'id é parâmetro obrigatório.' });

      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        return res.status(400).json({
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

export default new UsuarioController();
