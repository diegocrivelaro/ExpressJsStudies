const clientMocks = require("../mocks/clients.mock")

class ClientsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(clientMocks)
    })
  }
}

module.exports = new ClientsRepository()