class ContactController {
  // ISSUD - INDEX, SHOW, STORE, UPDATE, DELETE

  index(req, res) {
    res.send("Page Contact");
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar um registro
  }

  update() {
    // Alterar um registro
  }

  delete() {
    // Excluir um registro
  }
}

// Singleton
module.exports = new ContactController();
