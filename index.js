const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 1996

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res)=> {
    res.status(200).send('<h1>Welcome To Our API</h1>')
})

const { movieRouters, categoryRouters, connectMovCatRouters } = require('./routers')

app.use('/movie', movieRouters)
app.use('/category', categoryRouters)
app.use('/connect', connectMovCatRouters)


app.listen(port, ()=> console.log(`API aktif di port ${port}`))