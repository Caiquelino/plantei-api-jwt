import Usuario from "../models/Usuario.js";

class UsuarioController {
  // POST /usuarios
  async store(req, res) {
    try {
      const usuario = await Usuario.create(req.body);

      return res.status(201).json({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        cpf: usuario.cpf,
        data_nascimento: usuario.data_nascimento,
      });
    } catch (error) {
      return res.status(400).json({
        error: "Erro ao criar usuário",
        details: error.message,
      });
    }
  }

  // GET /usuarios/:id
  async show(req, res) {
    try {
      const { id } = req.params;

      const usuario = await Usuario.findByPk(id, {
        attributes: { exclude: ["senha"] },
      });

      if (!usuario) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      return res.json(usuario);
    } catch (error) {
      return res.status(400).json({
        error: "Erro ao buscar usuário",
        details: error.message,
      });
    }
  }

  // PUT /usuarios/:id
  async update(req, res) {
    try {
      const { id } = req.params;

      const usuario = await Usuario.findByPk(id);

      if (!usuario) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      await usuario.update(req.body);

      return res.json({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        cpf: usuario.cpf,
        data_nascimento: usuario.data_nascimento,
      });
    } catch (error) {
      return res.status(400).json({
        error: "Erro ao atualizar usuário",
        details: error.message,
      });
    }
  }
}

export default new UsuarioController();
