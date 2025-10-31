const express = require('express');
const { register, login } = require('../controllers/auth.controller');
const { validateJSON, validateBody, validateRegister, validateLogin } = require('../middleware/validation.middleware');

const router = express.Router();

router.post('/register', validateJSON, validateBody, validateRegister, register);
router.post('/login', validateJSON, validateBody, validateLogin, login);

module.exports = router;
