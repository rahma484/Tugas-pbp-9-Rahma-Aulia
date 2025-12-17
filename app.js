const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

const bookRoute = require('./routers/bookRoute')
const userRoute = require('./routers/userRoute')
const logger = require('./middlewares/logger')
const auth = require('./middlewares/userAuth')

dotenv.config()
const app = express()

app.use(bodyParser.json())
app.use(logger)
app.use(auth)

app.use('/api/books', bookRoute)
app.use('/api/users', userRoute)

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}/api/books`);
})