const router = require("express").Router();
const {protect, authorize} = require('../middleware/auth')

router
  .route("/")
  .get(protect, (req, res) => {
    res.status(200).json({
      msg: "Get all posts",
    });
  })
  .post();

router.route("/:id").get().put().delete();
module.exports = router;

// authorize('user')