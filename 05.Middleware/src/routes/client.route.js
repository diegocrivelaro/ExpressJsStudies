const { Router } = require("express");
const clientController = require("../controllers/ClientController");

const router = Router();

router.get("/index", (req, res, next) => {
  req.cod = Math.random().toString(26).substring(7);
  console.log("Middleware Client");
  next();
}, clientController.index);

module.exports = router;