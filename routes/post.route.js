const { Router } = require('express')
const postController = require('../controller/post.controller')

const postRouter = Router()

postRouter.post('/', postController.addPost)
postRouter.get('/', postController.getAllPosts)
postRouter.get('/:userId', postController.getAllPostFromUserId)

module.exports = postRouter