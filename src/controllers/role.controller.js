const { StatusCodes } = require('http-status-codes');
const RoleService = require('../services/role.service');
const { successResponse } = require('../utils/successResponse');
const { catchAsync } = require('../utils/catchAsync');

const roleService = new RoleService();

const createRole = catchAsync(async (req, res) => {
    const role = await roleService.createRole(req.body);
    successResponse.data = role;
    return res.status(StatusCodes.CREATED).json(successResponse);
})

const getRoleById = catchAsync(async (req, res) => {
    const role = await roleService.getRoleById(req.params.id);
    successResponse.data = role;
    return res.status(StatusCodes.OK).json(successResponse)
})

module.exports = {
    createRole,
    getRoleById
}