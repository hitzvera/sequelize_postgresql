const { sequelize } = require('./models')
const express = require('express')

const app = express()
const usersRouter = require('./routes/users.route')
const postsRouter = require('./routes/post.route')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/posts', postsRouter)

app.listen({
    port: 5000,
}, async () => {
    console.log('server running on port 5000')
    await sequelize.authenticate();
    console.log('database Connected!')
})