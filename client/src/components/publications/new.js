import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function New() {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/publications", {
      publication: {
        name: inputs.name,
        year: inputs.year      }
    })
      .then(resp => setRedirect(true))
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    event.persist();
  
    const { name, value } = event.target;

    setInputs(inputs => {
      inputs[name] = value;
      return inputs;
    });
  }

  if (redirect) return <Redirect to="/publications" />;

  return (
    <div className="container">
      <header>
        <h1>New Publication Post</h1>
      </header>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              name="name"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Year</label>
            <input
              className="form-control"
              name="year"
              required="required"
              onChange={handleInputChange}
            />
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
