import express from 'express';
const router = express.Router();
import { registerController, loginController, usersController, productsController, ordersController, cartController, paymentController, adminController, } from '../controllers/index.js';
import auth from '../middlewares/auth.js';
import admin from '../middlewares/admin.js';

//auth
router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.post('/logout', auth, loginController.logout);
router.get('/me', auth, usersController.me);
router.post('/reset-password-request', usersController.resetPasswordRequest);
router.post('/reset-passwords', usersController.resetPassword);
router.post('/wishlist', auth, usersController.addToWishlist);
router.get('/wishlist', auth, usersController.getWishlistProducts);


//products
router.get('/products',productsController.getProductsByFilter);
router.get('/all-products',productsController.getAllProducts);
router.get('/product/:id', productsController.getProductById);
router.post('/product',auth, admin,productsController.createProduct);
router.put('/product/:id',auth,admin, productsController.updateProductById);
router.delete('/product/:id',auth,admin, productsController.deleteProductById);
router.get('/collections', productsController.getAllCollections);


//orders
router.get('/orders',auth, ordersController.getOrderDetailsByUserId);
router.get('/order/:id',auth,ordersController.getOrderById);
router.get('/all-orders',auth, ordersController.getAllOrders);
router.put('/order/:id',auth,admin, ordersController.updateStatus);
router.delete('/order/:id',auth,admin, ordersController.deleteOrderById);


// carts
router.get('/cart',auth, cartController.getCarts);
router.post('/cart',auth, cartController.addToCart);
router.delete('/cart/:id',auth, cartController.deleteCartById);

//payments
router.post('/checkout',auth, paymentController.checkout);
router.post('/webhook',auth, paymentController.webhook);
router.post('/payment-success',auth, paymentController.paymentSucess);

//extra admin action
router.get('/all-customers',auth, adminController.getAllCustomers);
router.post('/remove-image',auth,admin, adminController.removeImageFromCloudinary);


export default router;