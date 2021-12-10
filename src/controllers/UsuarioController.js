import Usuario from '../models/Usuario';
import Perfil from '../models/Perfil';

class UsuarioController {
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll({
        attributes: ['id', 'nome', 'email', 'created_at', 'updated_at'],
        order: [['id', 'DESC']],
        include: {
          model: Perfil,
          as: 'permissao',
          attributes: ['id', 'perfil'],
        },
      });
      return res.json(usuarios);
    } catch (e) {
      return res.status(400).json({
        errors: [e.text],
      });
    }
  }

  async show(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'email', 'created_at', 'updated_at'],
        order: [['id', 'DESC']],
        include: {
          model: Perfil,
          as: 'permissao',
          attributes: ['id', 'perfil'],
        },
      });
      if (!usuario) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }

      return res.json(usuario);
    } catch (e) {
      return res.status(400).json({
        errors: [e.text],
      });
    }
  }

  async store(req, res) {
    try {
      let usuario = await Usuario.create(req.body);

      usuario = await Usuario.findByPk(usuario.id, {
        attributes: ['id', 'nome', 'email', 'created_at', 'updated_at'],
        order: [['id', 'DESC']],
        include: {
          model: Perfil,
          as: 'permissao',
          attributes: ['id', 'perfil'],
        },
      });
      return res.status(201).json(usuario);
    } catch (e) {
      return res.status(400).json({
        errors: [e.text],
      });
    }
  }

  async update(req, res) {
    try {
      let usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }
      await usuario.update(req.body, {});
      usuario = await Usuario.findByPk(usuario.id, {
        attributes: ['id', 'nome', 'email', 'created_at', 'updated_at'],
        order: [['id', 'DESC']],
        include: {
          model: Perfil,
          as: 'permissao',
          attributes: ['id', 'perfil'],
        },
      });
      return res.status(201).json(usuario);
    } catch (e) {
      return res.status(400).json({
        errors: [e.text],
      });
    }
  }

  async delete(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }
      await usuario.destroy();
      return res.status(204).json();
    } catch (e) {
      return res.status(400).json({
        errors: [e.text],
      });
    }
  }
}

export default new UsuarioController();
