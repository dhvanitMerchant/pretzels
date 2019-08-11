import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    Axios.get("/api/publications")
      .then(result => setPublications(result.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>All Publications</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {publications.map(publication => (
              <tr key={publication._id}>
                <td>
                  <Link to={`/publications/${publication._id}`}>{publication.name}</Link>
                </td>
              
                <td>
                  {publication.author && publication.author.firstName}{" "}
                  {publication.author && publication.author.lastName}
                </td>
                <td>
                  <Link to={`/publications/${publication._id}/edit`}>edit</Link>|
                  <Link to={`/publications/${publication._id}/destroy`}>delete</Link>
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
