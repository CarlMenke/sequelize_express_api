const Router = require('express').Router()
const controller = require('../controllers/PictureController')

Router.post('/create',controller.CreatePicture)

module.exports = Router