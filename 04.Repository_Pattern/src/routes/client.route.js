const { Router } = require("express");
const clientController = require("../controllers/ClientController");

const router = Router();

router.get("/index", clientController.index);
router.get("/show", clientController.show);
router.get("/store", clientController.store);
router.get("/update", clientController.update);
router.get("/delete", clientController.delete);

module.exports = router;
