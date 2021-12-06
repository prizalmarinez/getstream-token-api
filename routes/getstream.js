const express = require("express");

const { token } = require("../controllers/getstream");

const router = express.Router();

router.get("/token", token);

module.exports = router;
