import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [book, setBook] = useState([]);

  useEffect(() => {
    Axios.get(`/api/books/${props.match.params.id}`)
      .then(result => setBook(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{book.title}</h1>
      </header>

      <div>{book.content}</div>
    </div>
  );
}

export default Show;
