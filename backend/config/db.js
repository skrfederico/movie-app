/*******
Database Setup
******/
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('connected', function () {
  console.log(` ${db.name} at ${db.host}:${db.port}`)
})
