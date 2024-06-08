const express = require("express");

const defaultRoutes = require("./routes/default.route");
const clientRoutes = require("./routes/client.route");

const app = express();

app.use((req, res, next) => {
  req.id = Math.random().toString(36).substring(7)
  next()
})

app.use(defaultRoutes);
app.use(clientRoutes);

app.listen(8081, () => {
  console.log("Server is running on port 8081 🚀");
})