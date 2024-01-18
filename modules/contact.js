const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    number: {
      type: Number,
      required: true,
      trim: true,
    },
    company: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;