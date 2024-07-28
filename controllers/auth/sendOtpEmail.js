import nodemailer from "nodemailer";
import { EMAIL_ADDRESS, MAIL_PASSWORD } from "../../config/index.js";

const sendOtpEmail = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_ADDRESS,
        pass: MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: EMAIL_ADDRESS,
      to: email,
      subject: "Email Verification Request from AmarStore",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
              }
              .container {
                width: 80%;
                margin: 0 auto;
                padding: 2rem;
                background-color: #fff;
                border-radius: 4px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
              .header {
                text-align: center;
                margin-bottom: 2rem;
              }
              .header h1 {
                font-size: 2rem;
                color: #444;
              }
              .content {
                margin-bottom: 2rem;
              }
              .content p {
                font-size: 1.2rem;
                color: #444;
              }
              .footer {
                text-align: center;
                font-size: 0.8rem;
                color: #999;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Email Verify Request</h1>
              </div>
              <div class="content">
                <p>Your OTP for email verification is: <strong>${otp}</strong></p>
              </div>
              <div class="footer">
                <p>
                  Otp is valid only for 15 minutes.
                </p>
                <p>
                © 2023 AmarStore
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
      return false; // Email sending failed
  }
};

export { sendOtpEmail };
