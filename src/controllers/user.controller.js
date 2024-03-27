const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/user.service');
const {catchAsync} = require('../utils/catchAsync');
const {successResponse}  = require('../utils/successResponse')
const userService = new UserService();

const createUser = catchAsync(async (req, res) => {
    const user = await userService.createUser(req.body);
    const token = user.genJWT();
    successResponse.data = {user: user, token: token};

    return res.status(StatusCodes.CREATED).json(successResponse);
})

const loginUser = catchAsync(async (req, res) => {
    const user = await userService.login(req.body);
    const token = user.genJWT();
    successResponse.data = token;
    return res.status(StatusCodes.OK).json(successResponse);
})


module.exports = {
    createUser,
    loginUser
}