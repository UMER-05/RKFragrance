const express = require("express");
const router = express.Router();
const transporter = require("../config/contactusConfig");

router.post("/contact-us", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ status: 400, error: "All fields are required" });
  }

  try {
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ status: 200, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ status: 500, error: "Failed to send message" });
  }
});

module.exports = router;
