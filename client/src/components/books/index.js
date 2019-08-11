import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    Axios.get("/api/books")
      .then(result => setBooks(result.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>All Books</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {books.map(book => (
              <tr key={book._id}>
                <td>
                  <Link to={`/books/${book._id}`}>{book.title}</Link>
                </td>
                <td>{book.category}</td>
                <td>
                  {book.author && book.author.firstName}{" "}
                  {book.author && book.author.lastName}
                </td>
                <td>
                  <Link to={`/books/${book._id}/edit`}>edit</Link>|
                  <Link to={`/books/${book._id}/destroy`}>delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
