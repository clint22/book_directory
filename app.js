const express = require('express')
const app = express()
const port = 5000

const books = require('./routes/books')

// parse form data 
app.use(express.urlencoded({extended: false}))
// parse json 
app.use(express.json())

app.use('/api/books', books)

app.listen(port, ()=> {
    console.log('App listening')
})
