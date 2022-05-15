require('dotenv').config();
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection;
//connected
db.on('connected', () => {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
})
 
module.exports = mongoose