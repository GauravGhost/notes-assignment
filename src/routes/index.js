const express = require('express')
const router = express.Router();
const {RoleController} = require('../controllers')
/**
 * @description Role Router
 */
router.get('/v1/roles/:id', RoleController.getRoleById);
router.post('/v1/roles', RoleController.createRole);

/**
 * @description User Router
 */


/**
 * @description Note Router
 */

module.exports = router;