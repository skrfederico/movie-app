require('dotenv').config()
require('./backend/config/db')

const User = require('./backend/models/user')

;(async function () {
  await User.create([
    {
      name: 'Admin',
      email: 'admin@testing.com',
      password: String(process.env.PASSWORD),
      isAdmin: true,
    },
  ])
  process.exit()
})()
