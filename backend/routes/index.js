const express = require("express");
const router = express.Router();

const contactRoute = require("./contacts.js")
router.use("/contacts", contactRoute)

module.exports = router;