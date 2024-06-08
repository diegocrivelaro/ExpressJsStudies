const clientsRepository = require("../repositories/ClientsRepository");

class ClientController {
  async index(req, res) {
    const contacts = await clientsRepository.findAll();

    res.json(contacts);
  }
}

module.exports = new ClientController()