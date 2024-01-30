const clientsMock = require("../mocks/clients.mock");

class ClientsRepository {
  findAll() {
    return new Promise((resolve, reject) => resolve(clientsMock));
  }
}

module.exports = new ClientsRepository();
