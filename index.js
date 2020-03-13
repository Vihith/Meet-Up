const express = require('express')
const mongoose = require('./config/database')

const app = express()

// mongoose()

const PORT = 3000

app.listen(PORT, err => {
    if(err){
        console.log(err)
    }else{
        console.log(`Listening on port: ${PORT}`)
    }
})