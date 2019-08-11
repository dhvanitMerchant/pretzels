import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Edit(props) {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    Axios.get(`/api/books/${props.match.params.id}`)
      .then(result => setInputs(result.data))
      .catch(err => console.error(err));
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/books/update", {
      id: props.match.params.id,
      book: inputs
    })
      .then(resp => setRedirect(true))
      .catch(err => console.error(err));
  }

  function handleInputChange(event) {
    event.persist();

    const { name, value } = event.target;

    setInputs(inputs => {
      return {
        ...inputs,
        [name]: value
      };
    });
  }

  if (redirect) return <Redirect to="/books" />;

  return (
    <div className="container">
      <header>
        <h1>Edit Book Post</h1>
      </header>
      <div>
        <form action="/books" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              name="title"
              required="required"
              onChange={handleInputChange}
              defaultValue={inputs.title}
            />
          </div>

          <div className="form-group">
            <label>Content</label>
            <textarea
              className="form-control"
              name="content"
              onChange={handleInputChange}
              value={inputs.content}
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              className="form-control"
              name="category"
              required="required"
              onChange={handleInputChange}
              defaultValue={inputs.category}
            >
              <option value="COMIC">Comic</option>
              <option value="TRAVEL">travel</option>
              <option value="SPORT">sport</option>

            </select>
          </div>

          <div className="form-group">
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
