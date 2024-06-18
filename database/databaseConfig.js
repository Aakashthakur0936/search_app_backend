const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = () => {

    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then((data)=>{
        console.log(`DataBase connect successfully ${data.connection.host}`)
    })
    .catch((err)=>{
        console.log(err)
    })

}

module.exports  = connectDB;