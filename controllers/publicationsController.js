const Publication = require("../models/publication");

exports.index = (req, res) => {

  Publication.find()
   
    
    .populate("author")
    .then(publications => res.json(publications))
    .catch(err => res.status(404).send(err));
};




exports.show = (req, res) => {
  Publication.findOne({
    _id: req.params.id
  })
    
  
    .then(publication => res.json(publication))
    .catch(err => res.status(401).send(err));
};

exports.create = (req, res) => {
  if (!req.isAuthenticated())
    return res.status(401).send({ error: "Sign in idget" });

  // Add the current author to the publication
  req.body.publication.author = req.session.userId;

  Publication.create(req.body.publication)
    .then(() =>
      res.status(201).send({ success: "Publication was successfully created" })
    )
    .catch(err => res.status(400).send(err));
};

exports.edit = (req, res) => {
  if (!req.isAuthenticated())
    return res.status(401).send({ error: "Sign in idget" });

  Publication.findOne({
    _id: req.params.id,
    author: req.session.userId
  })
    .then(publication => res.json(publication))
    .catch(err => res.status(404).send(err));
};

exports.update = (req, res) => {
  if (!req.isAuthenticated())
    return res.status(401).send({ error: "Sign in idget" });

  Publication.updateOne(
    {
      _id: req.body.id,
      author: req.session.userId
    },
    req.body.publication,
    {
      runValidators: true
    }
  )
    .then(() =>
      res.status(202).send({ success: "Your publication was successfully updated" })
    )
    .catch(err => res.status(400).send(err));
};

exports.destroy = (req, res) => {
  if (!req.isAuthenticated())
    return res.status(401).send({ error: "Sign in idget" });

  Publication.deleteOne({
    _id: req.body.id,
    author: req.session.userId
  })
    .then(() =>
      res.status(202).send({ success: "Your publication was successfully destroyed" })
    )
    .catch(err => res.status(400).send(err));
};
