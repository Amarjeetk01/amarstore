import { ECOMMERCE_STORE_URL, STRIPE_SECRET_KEY,STRIPE_WEBHOOK_SECRET } from '../../config/index.js';
import stripePackage from "stripe";
import { v4 as uuidv4 } from 'uuid';
import CustomErrorHandler from "../../services/CustomErrorHandler.js";
import { Cart,Customer, Order  } from "../../models/index.js";
import { sendEmail } from './sendEmail.js';

const stripe = stripePackage(STRIPE_SECRET_KEY);

const paymentController = {
  // Checkout
  async checkout(req, res, next) {
    // const userId = req.user.id;
    try {
      const { customer } = req.body;
      if (!customer) {
        return next(CustomErrorHandler.notSufficientData("Not enough data to checkout"));
      }
      const carts = await Cart.find({ user: customer.id })
        .populate('product')
        .select("-updatedAt -__v");

      if (!customer || !carts) {
        return next(CustomErrorHandler.notSufficientData("Not enough data to checkout"));
      }

      const token = uuidv4();

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        shipping_address_collection: {
          allowed_countries: ["IN"],
        },
        line_items: carts.map((cartItem) => ({
          price_data: {
            currency: "inr",
            product_data: {
              name: cartItem.product.title,
              metadata: {
                productId: cartItem.product.id.toString(),
                // ...(cartItem.size.toString() && { size: cartItem.size.toString() }),
                // ...(cartItem.color.toString() && { color: cartItem.color.toString() }),
              },
            },
            unit_amount: Math.round(cartItem.product.price * (1 - cartItem.product.discountPercentage / 100) * 100),
          },
          quantity: cartItem.quantity,
        })),
        client_reference_id: customer.id,
        success_url: `${ECOMMERCE_STORE_URL}/order-success?token=${token}`,
        cancel_url: `${ECOMMERCE_STORE_URL}/cart`,
        metadata: {
          paymentToken: token,
        },
      });
      

      res.json(session);
    } catch (err) {
      return next(err);
    }
  },

  // Webhook
  async webhook(req, res, next) {
    try {
      const rawBody = await req.text();
      const signature = req.headers['stripe-signature'];

      const event = stripe.webhooks.constructEvent(rawBody, signature, STRIPE_WEBHOOK_SECRET);

      if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        const customerInfo = {
          user: session?.client_reference_id || '',
          name: session?.customer_details?.name,
          email: session?.customer_details?.email,
        };

        const paymentToken = session?.metadata?.paymentToken;
        const shippingAddress = {
          street: session?.shipping_details?.address?.line1,
          city: session?.shipping_details?.address?.city,
          state: session?.shipping_details?.address?.state,
          postalCode: session?.shipping_details?.address?.postal_code,
          country: session?.shipping_details?.address?.country,
        };

        const retrieveSession = await stripe.checkout.sessions.retrieve(
          session.id,
          { expand: ['line_items.data.price.product'] }
        );

        const lineItems = retrieveSession?.line_items?.data || [];
        const orderItems = lineItems.map((item) => {
          const metadata = item?.price?.product?.metadata || {};
          return {
            product: metadata.productId,
            // color: metadata.color || 'N/A',
            // size: metadata.size || 'N/A',
            quantity: item.quantity,
          };
        });

        const newOrder = new Order({
          user: customerInfo.user,
          products: orderItems,
          shippingAddress,
          shippingRate: session?.shipping_cost?.shipping_rate,
          totalAmount: session.amount_total ? session.amount_total / 100 : 0,
        });

        await newOrder.save();

        let customer = await Customer.findOne({ user: customerInfo.user });

        if (customer) {
          customer.orders.push(newOrder.id);
          await Customer.findByIdAndUpdate(customer.id, { paymentToken: paymentToken });
        } else {
          customer = new Customer({
            ...customerInfo,
            orders: [newOrder.id],
            paymentToken: paymentToken
          });
        }

        await customer.save();
        // After successful payment
        await sendEmail(customer.email, 'Order Confirmation', newOrder.id);
      }
      res.json();
    } catch (err) {
      return next(err);
    }
  },

  //payment-success
  async paymentSucess(req,res,next){
    try {
      const  userId  = req.user.id;
      const { token } = await req.json();
      if (!token) {
        return next(CustomErrorHandler.notSufficientData("Token is required"));
      }
      const customer = await Customer.findOne({ paymentToken: token });
  
      if (!customer) {
        return next(CustomErrorHandler.badRequest("Invalid token"));
      }
      customer.paymentToken = null;
      await customer.save();
      await Cart.deleteMany({ user: userId });
      return res.json({status:1});
    } catch (err) {
      return next(err);
    }
  }

};

export default paymentController;