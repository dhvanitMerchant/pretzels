import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [publication, setPublication] = useState([]);

  useEffect(() => {
    Axios.get(`/api/publications/${props.match.params.id}`)
      .then(result => setPublication(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{publication.name}</h1>
      </header>

      <div>{publication.year}</div>
    </div>
  );
}

export default Show;
