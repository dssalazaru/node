const express = require('express')
const morgan = require('morgan')

const tourRouter = require('./routes/tourRoutes.js')
const userRouter = require('./routes/userRoutes.js')

const app = express()

const api = '/api/v1'
const routes = {
  tours: `${api}/tours`,
  users: `${api}/users`
}

// Middlewares
if (process.env.NODE_ENV !== 'production') { app.use(morgan('dev')) }
// app.use(morgan('tiny'))
app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
  next()
})

app.use(routes.tours, tourRouter)
app.use(routes.users, userRouter)

module.exports = app