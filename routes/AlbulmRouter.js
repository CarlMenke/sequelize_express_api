const Router = require('express').Router()
const controller = require('../controllers/AlbulmController')

Router.post('/create',controller.CreateAlbulm)
Router.put('/update/:user_id',controller.UpdateAlbulm)
Router.delete('/delete/:user_id', controller.DeleteAlbulm)
Router.get('/all', controller.GetAlbulm)

module.exports = Router