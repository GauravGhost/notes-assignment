const dotenv = require('dotenv');

dotenv.config();


module.exports = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.ENV,
    MONGODB_URL: process.env.MONGODB_URL,
    JWT_SECRET: process.env.JWT_SECRET
}