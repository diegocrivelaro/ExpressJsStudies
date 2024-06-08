const { Router } = require("express");
const clientController = require("../controllers/ClientController");

const router = Router();

router.get("/index", clientController.index);

module.exports = router;