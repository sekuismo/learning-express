const express = require('express')
const axios = require('axios')

const path = require('path')
const app = express()
require('ejs')
const URL = 'https://jsonplaceholder.typicode.com/posts/'

const routes = require('./routes/routes')


app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(express.json())
app.use(routes)




app.listen(3000,console.log("puerto 3000"))