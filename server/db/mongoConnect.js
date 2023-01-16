const mongoose = require('mongoose'); //connect to mongoose module
require('dotenv').config()

main().catch(err => console.log(err)); //Error Message if not working the connect

async function main() { //connect Data Base from Mongo Atlas by user & password 
<<<<<<< HEAD
    await mongoose.connect(`mongodb://127.0.0.1:27018/basmah7`); //(feb22 == name DataBase)
    console.log(`Mongo Atlas connect...`) //print--> Mongo is Working
=======
    await mongoose.connect(`mongodb+srv://Roni1:roni123@cluster0.qi5tkfy.mongodb.net/myApp`); //(feb22 == name DataBase)
    console.log(`Mongo Atlas connected to myApp.`) //print--> Mongo is Working
>>>>>>> 6d0d933e33aa0b71a0d8a7c35ddc2d2c3d52901a
}