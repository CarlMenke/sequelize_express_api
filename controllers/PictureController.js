const {User , Picture, Albulm}  = require('../models')
const {Op} = require('sequelize')


const CreatePicture = async (req,res) => {
    try{
        const user = await Picture.create(req.body)
        res.send(user)
    }catch(error){
        throw error
    }
}

module.exports = {
    CreatePicture
}