// Our router module
const router = require("express").Router();

// Our controller
const BooksController = require("../controllers/booksController");

// Our routes
router.get(`/`, BooksController.index);
router.get(`/:id`, BooksController.show);
router.get(`/:id/edit`, BooksController.edit);
router.post(`/`, BooksController.create);
router.post(`/update`, BooksController.update);
router.post(`/destroy`, BooksController.destroy);

// We have to export our changes
module.exports = router;
