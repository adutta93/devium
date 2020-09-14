const router = require("express").Router();
const { registration, login, verifiedToken } = require("../controller/userController");

router.post("/register", registration);

router.post("/login", login);

router.get('/verify', verifiedToken)
module.exports = router;