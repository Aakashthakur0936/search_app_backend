const mongoose = require('mongoose')

const searchSchema = mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    }
})

module.exports = mongoose.model('searchData', searchSchema)