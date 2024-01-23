const express = require("express");
const Contact = require("../modules/contact");
const router = express.Router();

router.post("/api/contact", async (req, res) => {
  try {
    const { name, email, number, company, message } = req.body;

    let contact = new Contact({
      name,
      email,
      number,
      company,
      message,
    });
    await contact.save();

    res.status(200).json({ msg: "Succesfully submitted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
