// O Controller deve ser responsável por saber as regras de negócio da aplicação

const clientsRepository = require("../repositories/ClientsRepository");

class ClientController {
  async index(req, res) {
    const contacts = await clientsRepository.findAll();

    res.json(contacts);
  }

  show(req, res) {
    return;
  }

  store(req, res) {
    return;
  }

  update(req, res) {
    return;
  }

  delete(req, res) {
    return;
  }
}

// Pattern Singleton
module.exports = new ClientController();
