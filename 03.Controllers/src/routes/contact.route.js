const { Router } = require("express");
const ContactController = require("../controllers/ContactController");

const router = Router();

router.get("/contact", ContactController.index);

module.exports = router;
