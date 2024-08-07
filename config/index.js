import dotenv from 'dotenv';
dotenv.config();

export const {
    APP_PORT,
    DEBUG_MODE,
    DB_URL,
    JWT_SECRET,
    REFRESH_SECRET,
    PAGE_SIZE,
    APP_URL,
    ECOMMERCE_STORE_URL,
    SESSION_SECRET,
    MAIL_PASSWORD,
    EMAIL_ADDRESS,
    STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
} = process.env;