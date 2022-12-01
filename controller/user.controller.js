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

const getAllUsers = async(req,res)=>{
    try {
        const users = await User.findAll()
        return res.status(200).json(users) 
    }
    catch(error){
        return res.status(500).json({
            error: true,
            message: error.errors[0]
        })
    }
}

const getUserById = async (req,res) => {
    const uuid = req.params.id
    try{
        const user = await User.findOne({
            where: { uuid },
            include: ['posts'],
        })
        return res.status(200).json(user)
    } catch(error) {
        console.log(error)
        return res.status(500).json({
            error: true,
            message: error,
        })
    }
}

const deleteUserById = async (req,res) => {
    const uuid = req.params.id
    try{
        const user = await User.findOne({
            where: { uuid },
        })
        await user.destroy()
        return res.status(200).json({message: "user has been deleted!"})
    } catch(error) {
        console.log(error)
        return res.status(500).json({
            error: true,
            message: error,
        })
    }
}

const editUserById = async (req,res) => {
    const uuid = req.params.id
    const { name, email, role } = req.body
    try{
        const user = await User.findOne({
            where: { uuid },
        })
        user.name = name
        user.email = email
        user.role = role

        await user.save()
        return res.json({
            error: false,
            message: "user has been edited",
            user,
        })
    } catch(error) {
        console.log(error)
        return res.status(500).json({
            error: true,
            message: error,
        })
    }
}

module.exports = {
    addUser,
    getAllUsers,
    getUserById,
    editUserById,
    deleteUserById
}