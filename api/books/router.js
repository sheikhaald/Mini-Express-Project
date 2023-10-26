const express = require("express");
const {
  getAllbooks,
  createBook,
  getOnebook,
  updateBook,
  deletBook,
} = require("./controller");

const router = express.Router();

router.get("/book", getAllbooks);
router.post("/book", createBook);
router.get("/book/:id'", getOnebook);
router.put("/book/:id", updateBook);
router.delete("/book/:id", deletBook);

module.exports = router;
