const {User , Picture, Albulm}  = require('../models')
const {Op} = require('sequelize')


const CreateAlbulm = async (req,res) => {
    try{
        const albulm = await Albulm.create(req.body)
        res.send(albulm)
    }catch(error){
        throw error
    }
}

const UpdateAlbulm = async (req,res) => {
    try{

    }catch(error){
        throw error
    }
}

const DeleteAlbulm = async (req,res) => {
    try{

    }catch(error){
        throw error
    }
}

const GetAlbulm = async (req,res) => {
    try{

    }catch(error){
        throw error
    }
}



module.exports = {
    GetAlbulm,
    UpdateAlbulm,
    DeleteAlbulm,
    CreateAlbulm
}