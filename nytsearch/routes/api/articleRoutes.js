const router = require("express").Router();
const articleControllers = require("../contollers/articleControllers");

router.route("/")
  .get(articleControllers.findAll)
  .post(articleControllers.create);

router
  .route("/:id")
  .delete(articleControllers.remove);

module.exports = router;