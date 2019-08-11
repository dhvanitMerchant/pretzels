const Book = require("../models/book");

exports.index = (req, res) => {
  Book.find()

    .populate("author")
    .then(books => res.json(books))
    .catch(err => res.status(404).send(err));
};



exports.show = (req, res) => {
  Book.findOne({
    _id: req.params.id
  })

    .then(book => res.json(book))
    .catch(err => res.status(401).send(err));
};

exports.create = (req, res) => {
  if (!req.isAuthenticated())
    return res.status(401).send({ error: "Sign in idget" });

  // Add the current author to the book
  req.body.book.author = req.session.userId;

  Book.create(req.body.book)
    .then(() =>
      res.status(201).send({ success: "Book was successfully created" })
    )
    .catch(err => res.status(400).send(err));
};

exports.edit = (req, res) => {
  if (!req.isAuthenticated())
    return res.status(401).send({ error: "Sign in idget" });

  Book.findOne({
    _id: req.params.id,
    author: req.session.userId
  })
    .then(book => res.json(book))
    .catch(err => res.status(404).send(err));
};

exports.update = (req, res) => {
  if (!req.isAuthenticated())
    return res.status(401).send({ error: "Sign in idget" });

  Book.updateOne(
    {
      _id: req.body.id,
      author: req.session.userId
    },
    req.body.book,
    {
      runValidators: true
    }
  )
    .then(() =>
      res.status(202).send({ success: "Your book was successfully updated" })
    )
    .catch(err => res.status(400).send(err));
};

exports.destroy = (req, res) => {
  if (!req.isAuthenticated())
    return res.status(401).send({ error: "Sign in idget" });

  Book.deleteOne({
    _id: req.body.id,
    author: req.session.userId
  })
    .then(() =>
      res.status(202).send({ success: "Your book was successfully destroyed" })
    )
    .catch(err => res.status(400).send(err));
};
