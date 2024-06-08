const clientsRepository = require("../repositories/ClientsRepository");

class ClientController {
  async index(req, res) {
    const contacts = await clientsRepository.findAll();

    res.json({
      id: req.id,
      cod: req.cod,
      contacts,
    });
  }
}

module.exports = new ClientController()