const express = require("express");
const router = express.Router();

const Projects = require("../Models/Projects");

router.post("/addProject", async (req, res) => {
  console.log("iam here in add real");
  console.log("req.body", req.body);

  const Project = new Projects({
    pname: req.body.pname,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    githup_link: req.body.githup_link,
  });

  try {
    console.log(" iam in try ");
    //save in DB
    const savedproject = Project.save();
    consol.log("savedproject ", savedproject);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/retrieveProjects", async (req, res) => {
  console.log("iam in retrieve all Projects");
  await Projects.find().exec((err, projects) => {
    if (err) return res.status(404).json({ success: false });
    res.status(200).json(projects);
  });
});

module.exports = router;
