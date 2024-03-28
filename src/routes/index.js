const express = require('express')
const router = express.Router();
const { RoleController, UserController, NoteController } = require('../controllers');
const { authentication } = require('../middlewares/authentication');
const { authorization } = require('../middlewares/authorization');
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
router.get('/v1/notes/:id', NoteController.getNoteById);
router.post('/v1/notes', NoteController.createNote);
router.put('/v1/notes/:id', NoteController.updateNote);
router.post('/v1/notes/:id/share', NoteController.shareNoteById);
router.post('/v1/notes/:id/share/:userId', NoteController.shareNoteByUserId);


module.exports = router;