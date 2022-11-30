const { Router } = require('express')
const postController = require('../controller/post.controller')

const postRouter = Router()

postRouter.post('/', postController.addPost)

module.exports = postRouter