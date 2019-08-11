import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function New() {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/books", {
      book: {
        title: inputs.title,
        content: inputs.content,
        category: inputs.category
      }
    })
      .then(resp => setRedirect(true))
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    event.persist();
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;

    setInputs(inputs => {
      inputs[name] = value;
      return inputs;
    });
  }

  if (redirect) return <Redirect to="/books" />;

  return (
    <div className="container">
      <header>
        <h1>New Book Post</h1>
      </header>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              name="title"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Content</label>
            <input
              className="form-control"
              name="content"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              className="form-control"
              name="category"
              required="required"
              onChange={handleInputChange}
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

export default New;
