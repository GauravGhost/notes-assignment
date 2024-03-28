const { StatusCodes } = require("http-status-codes")
const { ApiError } = require("../utils/base.error")


const authorization = (role) => (req, res, next) => {
    const roleDetail = req.user.role;
    const permission = roleDetail.permission;
    
    if (permission.includes("all")) {
        next();
    }

    if (!role) {
        throw new ApiError(StatusCodes.UNAUTHORIZED, "You are not authorized to access this route");
    }

    if (!permission.includes(role)) {
        throw new ApiError(StatusCodes.UNAUTHORIZED, "You are not authorized to access this route")
    }
    next();
}

module.exports = {
    authorization
}