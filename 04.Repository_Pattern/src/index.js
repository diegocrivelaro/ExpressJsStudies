const express = require("express");
const clientRoutes = require("./routes/client.route");

const app = express();

app.use(clientRoutes);

app.listen(3000, () => console.log("Server is running on port 3000"));
