import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Edit(props) {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    Axios.get(`/api/publications/${props.match.params.id}`)
      .then(result => setInputs(result.data))
      .catch(err => console.error(err));
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/publications/update", {
      id: props.match.params.id,
      publication: inputs
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

  if (redirect) return <Redirect to="/publications" />;

  return (
    <div className="container">
      <header>
        <h1>Edit Publication Post</h1>
      </header>
      <div>
        <form action="/publications" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              name="name"
              required="required"
              onChange={handleInputChange}
              defaultValue={inputs.name}
            />
          </div>

          <div className="form-group">
            <label>Year</label>
            <input
              className="form-control"
              name="year"
              onChange={handleInputChange}
              value={inputs.year}
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

export default Edit;
