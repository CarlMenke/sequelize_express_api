const {User , Picture, Albulm}  = require('../models')
const {Op} = require('sequelize')

const GetAllUsers = async (req,res) =>{
    try{
        const users = await User.findAll({
            include:[{
                    model:Albulm,
                    as:'albulms'
                },{
                    model:Picture,
                    as:'pictures'
            }]
        });
        
        res.json(users)
    }catch(error){
        throw error
    }
}
const CreateUser = async (req,res) => {
    try{
        const user = await User.create(req.body)
        res.send(user)
    }catch(error){
        throw error
    }
}

const UpdateUser = async (req,res) => {
    try{
        const user = await User.update(req.body, {
            where:{
                id:req.params.user_id
            },
            returning:true
        })
        res.send(user)
    }catch(error){
        throw error
    }
}

const DeleteUser = async (req,res) => {
    try{
        await User.destroy({where:{id:req.params.user_id}})
        res.send({message:`deleted user where id is ${req.params.user_id}`})
    }catch(error){
        throw error
    }
}

const GetUserDetails = async (req,res) => {
    try{
        const user = await User.findOne({
            where:{
                id:req.params.user_id
            },
            include:[{
                    model:Albulm,
                    as:'albulms'
                },{
                    model:Picture,
                    as:'pictures'
            }]
        });
        res.send(user)
    }catch(error){
        throw error
    }
}

module.exports = {
    CreateUser,
    DeleteUser,
    GetUserDetails,
    UpdateUser,
    GetAllUsers
}