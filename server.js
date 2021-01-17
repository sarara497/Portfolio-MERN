const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();
const path = require('path')


mongoose.connect(process.env.MONGODB_URI || process.env.DB_CONNECT,
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

app.use('/projects' , require('./routes/projects'))


if(process.env.NODE_ENV === 'production'){ 
  app.use(express.static('frontend/build'))

  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    })
}

app.use((req,res) => {
    res.send('Welcome to Backend *_^')
  })
  
  app.listen(process.env.PORT || 4000 , ()=> console.log("iam running on port 4000"))