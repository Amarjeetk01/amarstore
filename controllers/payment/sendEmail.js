import nodemailer from 'nodemailer';
import { EMAIL_ADDRESS, MAIL_PASSWORD } from '../../config/index.js';
import { Order } from '../../models/index.js';

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

const generateEmailTemplate = (order, emailAddress) => {
  const productsList = order.products.map(product => `
    <li>${product.product.title} - Quantity: ${product.quantity}</li>
  `).join('');

  return `
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
          <h1>Thank you for your order!</h1>
        </div>
        <div class="content">
          <p>
            Your order has been successfully placed. Here's a summary of your order:
          </p>
          <ul>
            <li>Order Number: #${order.id}</li>
            <li>Order Date: ${new Date(order.updatedAt).toLocaleDateString()}</li>
            <li>Shipping Address: ${order.shippingAddress.street}, ${order.shippingAddress.city}, ${order.shippingAddress.state}, ${order.shippingAddress.postalCode}</li>
            <li>
              Items:
              <ul>
                ${productsList}
              </ul>
            </li>
            <li>Total Amount: ₹${order.totalAmount.toFixed(2)}</li>
          </ul>
        </div>
        <div class="footer">
          <p>
            If you have any questions, please contact us at <a href="mailto:${emailAddress}">${emailAddress}</a>.
          </p>
          <p>
                © 2023 AmarStore
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

const sendEmail = async (to, subject, orderId) => {
  const order = await Order.findById(orderId).populate('products.product');
  if (!order) {
    throw new Error('Order not found');
  }

  const emailHtml = generateEmailTemplate(order, EMAIL_ADDRESS);

  const mailOptions = {
    from: EMAIL_ADDRESS,
    to,
    subject,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export { sendEmail };
