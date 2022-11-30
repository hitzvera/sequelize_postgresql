const { Router } = require('express')
const userController = require('../controller/user.controller')

const userRouter = Router()

userRouter.post('/', userController.addUser)
userRouter.get('/', userController.getAllUsers)
userRouter.get('/:id', userController.getUserById)

module.exports = userRouter