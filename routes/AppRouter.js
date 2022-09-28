const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const AlbulmRouter = require('./AlbulmRouter')
const PictureRouter = require('./PictureRouter')

//more speciifc routes binded
Router.use('/users', UserRouter)
Router.use('/albulms', AlbulmRouter)
Router.use('/pictures',PictureRouter)

module.exports = Router