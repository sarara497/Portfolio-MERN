const mongoose = require('mongoose')

const Projects = mongoose.Schema({
    pname: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
        type: String
      },
    githup_link:{
        type: String
    }

})

const MYProjects = mongoose.model('MyProjects', Projects)

//export the model

module.exports = MYProjects