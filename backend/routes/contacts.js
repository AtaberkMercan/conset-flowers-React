const express = require("express");
const router = express.Router();
const Contact = require("../models/contact.js");

router.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const errors = {};
    if (!name || name.trim() === "") errors.name = "İsim zorunlu";
    if (!email || !/\S+@\S+\.\S+/.test(email)) errors.email = "Geçerli e-posta girin";
    if (!subject || subject.trim() === "") errors.subject = "Konu zorunlu";
    if (!message || message.trim() === "") errors.message = "Mesaj zorunlu";

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    res.status(201).json({ success: true, contact: newContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;