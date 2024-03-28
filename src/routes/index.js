const express = require('express')
const router = express.Router();
const {RoleController, UserController} = require('../controllers');
const { checkAuth } = require('../middlewares/authentication');
/**
 * @description Role Router
 */
router.get('/v1/roles/:id', checkAuth, RoleController.getRoleById);
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