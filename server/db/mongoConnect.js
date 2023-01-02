const mongoose = require('mongoose'); //connect to mongoose module
require('dotenv').config()

main().catch(err => console.log(err)); //Error Message if not working the connect

async function main() { //connect Data Base from Mongo Atlas by user & password 
    await mongoose.connect(`mongodb+srv://Roni1:roni123@cluster0.qi5tkfy.mongodb.net/myApp`); //(feb22 == name DataBase)
    console.log(`Mongo Atlas connected to myApp.`) //print--> Mongo is Working
}