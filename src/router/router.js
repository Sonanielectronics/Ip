const HTTP = require("../../constant/response.constant");

const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

router.get("/add", class1.a);
router.post("/add", class1.b);

router.get("/index", class1.c);

module.exports = router;
