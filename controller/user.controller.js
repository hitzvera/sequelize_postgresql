const { User } = require('../models')
const { validationResult } = require('express-validator')

const addUser = async(req,res) => {
    const errorRequest = validationResult(req)
    if(!errorRequest.isEmpty()) {
        return res.status(400).json({
            errors: errorRequest.errors
        })
    }
    const { name, email, role } = req.body
    try {
        const user = await User.create({
            name, 
            email,
            role
        })
        return res.status(201).json(user)
    } catch(error){
        console.log(error)
        return res.status(500).json({
            error: true,
            message: error.errors[0]
        })
    }
}

module.exports = {
    addUser
}