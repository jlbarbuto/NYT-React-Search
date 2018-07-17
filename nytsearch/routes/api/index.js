const router = require("express").Router();
const articleRoutes = require("./articlRoutes");

router.use("/articles", articleRoutes);

module.exports = router;
