const {Router} = require("express");
const balanceCtrls = require("../controllers/balance.controller");
const balanceCtrl = require("../controllers/balance.controller");

const router = Router();

router.get("/balance", balanceCtrls.getBalance);
router.post("/balance", balanceCtrls.postBalance);

module.exports = router;