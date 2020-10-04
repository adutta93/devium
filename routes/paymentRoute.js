const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { v4: uuidv4 } = require("uuid");

// initializing nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

router.post("/paymemt", (req, res) => {
  const { product, token } = req.body;
  const idempotencyKey = uuidv4();
  return stripe.charges
    .create(
      {
        amount: product.price * 100,
        currency: "INR",
        source: token.id,
        receipt_email: token.email,
        description: product.name,
      },
      { idempotencyKey }
    )
    .then((result) => {
      res.status(200).json({
        result,
      });
      const mailOptions = {
        from: "Subscription <admin@devium.com>",
        to: token.email,
        subject: "Devium subscription!",
        text: ` You have purchased a subscription! 🚀
        to Download your Payment Reciept click below =>
        ${result.receipt_url}`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        }
      });
    })
    .catch((err) => console.log(err));
});
