const { User, Post } = require('../models')

const addPost = async (req,res) => {
    const { userId, body } = req.body
    try{
        const user = await User.findOne({where: { uuid: userId}})
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

module.exports = {
    addPost
}

