const mongoose = require('mongoose'); //connect to mongoose module
require('dotenv').config()
const { config } = require('../config/secret');

main().catch(err => console.log(err)); //Error Message if not working the connect

async function main() { //connect Data Base from Mongo Atlas by user & password 
    await mongoose.connect(`mongodb+srv://${config.userDB}:${config.userPass}@cluster0.qi5tkfy.mongodb.net/myApp`); //(feb22 == name DataBase)
    console.log(`Mongo Atlas connect...`) //print--> Mongo is Working
}