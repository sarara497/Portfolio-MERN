const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())



app.use((req,res) => {
    res.send('Welcome to Backend *_^')
  })
  
  app.listen(4000 , ()=> console.log("iam running on port 4000"))