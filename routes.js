// Our Express app module
const express = require("express");
const app = express();

// Importing the routes
const bookRoutes = require("./routes/books");
const authorRoutes = require("./routes/authors");
const sessionRoutes = require("./routes/sessions");

// Registering our routes
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);


app.use("/", sessionRoutes);

// Exporting the changes
module.exports = app;
