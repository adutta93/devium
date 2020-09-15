const router = require("express").Router();
const {protect}  = require('../middleware/auth')
const { registration, login, verifiedToken, deleteUser } = require("../controller/userController");

router.post("/register", registration);

router.post("/login", login);

router.post('/verify', verifiedToken)

router.delete('/delete-user/:id', protect, deleteUser)
module.exports = router;