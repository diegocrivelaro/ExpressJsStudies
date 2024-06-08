const express = require("express");

const defaultRoutes = require("./routes/default.route");
const clientRoutes = require("./routes/client.route");

const app = express();

app.use(defaultRoutes);
app.use(clientRoutes);

app.listen(8081, () => {
  console.log("Server is running on port 8081 🚀");
})