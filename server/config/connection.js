const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://brushdavid99:NlIaqBCvrTtyro2T@flavorly.rxyyxhm.mongodb.net/?retryWrites=true&w=majority&appName=Flavorly')

module.exports = mongoose.connection
