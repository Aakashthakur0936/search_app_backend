const app = require('./app')

const connectDB = require('./database/databaseConfig');

const dotenv = require('dotenv')

dotenv.config({path:".evn"})
connectDB();




app.listen(process.env.PORT || 6000 , ()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})