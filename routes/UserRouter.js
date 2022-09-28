const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.post('/create',controller.CreateUser)
Router.get('/details/:user_id', controller.GetUserDetails)
Router.put('/update/:user_id',controller.UpdateUser)
Router.delete('/delete/:user_id', controller.DeleteUser)
Router.get('/all', controller.GetAllUsers)

module.exports = Router