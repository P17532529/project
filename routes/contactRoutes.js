const express = require("express");
const router = express.Router();
const {geT,getwithId,create,replace,update,del} = require('../controllers/contactController')
router
  .route("/").get(geT).post(create);
router
  .route("/:id").get(getwithId).put(replace).patch(update).delete(del);

module.exports = router;
