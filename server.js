const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();


mongoose.connect(process.env.DB_CONNECT,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })

  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))


const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/Projects' , require('./routes/Projects'))

app.use((req,res) => {
    res.send('Welcome to Backend *_^')
  })
  
  app.listen(4000 , ()=> console.log("iam running on port 4000"))