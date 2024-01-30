const clientsMock = await fetch("https://jsonplaceholder.typicode.com/users", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    return data;
  });

module.exports = clientsMock;
