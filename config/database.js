const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/meetup-app',{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connected to Database')
})
.catch(err => {
    console.log('listening on port', port)
})

module.exports = mongoose