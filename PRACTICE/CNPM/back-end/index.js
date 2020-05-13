const express = require('express')
const app = express()

const bcrypt = require('bcrypt')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/CNPM', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('connected to Mongo DB')
})

const morgan = require('morgan') 
app.use(morgan('dev'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const visitorRoute = require('./routes/visitor.route')
const studentRoute = require('./routes/student.route')
const userRoute = require('./routes/user.router')

const port = process.env.PORT || 8000

app.set('view engine', 'pug')
app.set('views','./views')

app.get('/',(req, res) => {
    res.render('index', {
        name: 'Nguyen Huu Hung'
    });
})


app.use('/visitor', visitorRoute)
app.use('/student', studentRoute)
app.use('/user', userRoute)


app.listen(port, () => console.log(`Server running at port ${port}`))
