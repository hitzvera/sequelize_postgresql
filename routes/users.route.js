const { Router } = require('express')
const { check } = require('express-validator')
const userController = require('../controller/user.controller')

const userRouter = Router()

userRouter.post('/',
    // check('name')
    //     .exists()
    //     .withMessage('Your Request should include name')
    //     .notEmpty()
    //     .withMessage('your name can\'t be empty'),
    // check('email')
    //     .notEmpty()
    //     .withMessage('Your Request should include email')
    //     .isEmail()
    //     .withMessage('Email format should be correct'),
    // check('role')
    //     .notEmpty()
    //     .withMessage('Your Request should include role'),
    userController.addUser
)
userRouter.get('/', userController.getAllUsers)
userRouter.get('/:id', userController.getUserById)

module.exports = userRouter