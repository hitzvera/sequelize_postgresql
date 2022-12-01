const { User, Post } = require('../models')

const addPost = async (req,res) => {
    const { userUuid, body } = req.body
    try{
        const user = await User.findOne({where: { uuid: userUuid}})
        const post = await Post.create({
            userId: user.id,
            body
        })
        return res.json(post)
    }
    catch(error){
        return res.json({
            error: true,
            message: error
        })
    }
}

const getAllPosts = async (req,res) => {
    try{
        const posts = await Post.findAll({ include: ['user']})
        return res.json(posts)
    } catch(error) {
        return res.status(500).json(error)
    }
}

const getAllPostFromUserId = async (req,res) => {
    const userId = req.params.userId
    try {
        const posts = await Post.findAll({
            where: { userId }
        })
        if(posts.length === 0){
            return res.json({ message: "There is no post yet"})
        }
        return res.status(200).json(posts)

    } catch(error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    addPost,
    getAllPostFromUserId,
    getAllPosts
}

