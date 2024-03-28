const { NODE_ENV } = require("../config/server.config");
const { errorResponse } = require('../utils/errorResponse');

// Send response on errors
const errorHandler = (err, req, res, next) => {
    let { statusCode, message } = err;
    if (!statusCode) {
        statusCode = 500
    }
    res.locals.errorMessage = err.message;

    errorResponse.error = message;
    errorResponse.statusCode = statusCode;

    if (NODE_ENV === "development") {
        errorResponse.stack = err.stack
        console.error(err);
    }

    res.status(statusCode).send(errorResponse);
};

module.exports = { errorHandler }