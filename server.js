// server.js
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors()); // Allows cross-origin requests from your React app
app.use(express.json()); // Parses incoming JSON requests

// Basic route for testing server status
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Nodemailer transporter setup
// It's highly recommended to use environment variables for sensitive data.
// Make sure to set EMAIL_USER and EMAIL_PASS in your .env file.
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || "nikunjgupta.grandhe@gmail.com", // Fallback to hardcoded if env var not set
    pass: process.env.EMAIL_PASS || "hjahfgdqzuepzoxq" // Fallback to hardcoded if env var not set
  },
});

// Verify Nodemailer transporter configuration
contactEmail.verify((error) => {
  if (error) {
    console.error("Nodemailer verification error:", error);
  } else {
    console.log("Nodemailer is ready to send emails.");
  }
});

// API route for contact form submission
// This endpoint will now expect 'name', 'email', 'subject', and 'message'
router.post("/api/contact", (req, res) => {
  const { name, email,number, subject, message } = req.body; // Destructure expected fields

  const mail = {
    from: `${name} <${email}>`, // Format: "Sender Name <sender@example.com>"
    to: "nikunjgupta.grandhe@gmail.com", // Your recipient email address
    subject: `Portfolio Contact Form: ${subject}`, // Use the subject from the form
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number:</strong> ${number}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      // Send a more informative error response
      res.json({ success: false, message: "Failed to send message. Please try again later.", error: error.message });
    } else {
      res.json({ success: true, status: "Message Sent Successfully!" });
    }
  });
});

// Use the router for all routes
app.use("/", router);

// Define the port for the server
const PORT = process.env.PORT || 5000;

// Start the server (only one app.listen call)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});