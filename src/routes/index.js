const express = require('express')
const router = express.Router();
const {RoleController, UserController} = require('../controllers');
const { authentication } = require('../middlewares/authentication');
const {authorization} = require('../middlewares/authorization');
const { READ_ROLE } = require('../utils/permission.constant');
/**
 * @description Role Router
 */
router.get('/v1/roles/:id', authentication, authorization(READ_ROLE), RoleController.getRoleById);
router.post('/v1/roles', RoleController.createRole);

/**
 * @description User Router
 */
router.post('/v1/users/login', UserController.loginUser)
router.post('/v1/users', UserController.createUser)

/**
 * @description Note Router
 */

module.exports = router;