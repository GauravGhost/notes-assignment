const { StatusCodes } = require("http-status-codes");
const { ApiError } = require("../utils/base.error");
const { catchAsync } = require("../utils/catchAsync")
const UserService = require('../services/user.service');
const jwt = require('jsonwebtoken');
const serverConfig = require("../config/server.config");

const userService = new UserService();


const verifyAuth = async (token) => {
    try {


        const payload = jwt.verify(token, serverConfig.JWT_SECRET);
        console.log("fdfd", payload);
        if (!payload) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Payload not found");
        }

        const user = await userService.getUserById(payload.id);
        if (!user) {
            throw new ApiError(StatusCodes.UNAUTHORIZED, "User Unauthorized")
        }

        return user;
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError && error.message === 'invalid signature') {
            throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid token signature");
        }
        throw error;
    }
}


const authentication = catchAsync(async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization && !authorization?.startsWith("Bearer")) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Token not found")
    }

    const token = authorization.split(' ')[1];
    const user = await verifyAuth(token);
    req.user = user;
    next();
})

module.exports = {
    authentication
}