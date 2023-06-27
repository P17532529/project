const express = require("express");
const contactController = require('../controllers/contactController')
const router = express.Router();
router
  .route("/")
  .get((req, res) => {
    res.status(200).json({ message: "MOhit" });
  })
  .route("/:id").get(contactController.get)
  .route("/").post(contactController.create)
  .route("/:id").put(contactController.replace)
  .route("/:id").patch(contactController.update)
  .route("/:id").delete(contactController.delete);

module.exports = router;
