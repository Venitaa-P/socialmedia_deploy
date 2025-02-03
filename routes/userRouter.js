const userController = require('../controller/userController')
const router = require('express').Router()

router.get('/api/users', userController.getAllUsers);
router.get('/api/users/:id', userController.getSingleUser)
router.post('/api/users', userController.addNewUser)
router.put('/api/users', userController.updateUser)
router.delete('/api/users/:id', userController.deleteUser)

module.exports = router
