const express = require("express");
const contactRoutes = require("./routes/contact.route");

const app = express();

app.use(contactRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
