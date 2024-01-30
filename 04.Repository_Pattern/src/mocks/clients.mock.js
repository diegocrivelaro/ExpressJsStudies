const { uuid: v4 } = require("uuidv4");

module.exports = {
  status: "success",
  data: [
    {
      id: v4(),
      name: "João",
      email: "joao@example.com",
      phone: "11-1111-1111",
    },
    {
      id: v4(),
      name: "Maria",
      email: "maria@example.com",
      phone: "22-2222-2222",
    },
    {
      id: v4(),
      name: "Pedro",
      email: "pedro@example.com",
      phone: "33-3333-3333",
    },
  ],
};
