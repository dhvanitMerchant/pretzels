import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

import BookNew from "./books/new";
import BookIndex from "./books/index";
import BookShow from "./books/show";
import BookEdit from "./books/edit";
import BookDestroy from "./books/destroy";

import PublicationNew from "./publications/new";
import PublicationIndex from "./publications/index";
import PublicationShow from "./publications/show";
import PublicationEdit from "./publications/edit";
import PublicationDestroy from "./publications/destroy";

import Register from "./sessions/register";
import Login from "./sessions/login";
import Logout from "./sessions/logout";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/books/new" component={BookNew} />
      <Route exact path="/books" component={BookIndex} />
      <Route exact path="/books/:id" component={BookShow} />
      <Route exact path="/books/:id/edit" component={BookEdit} />
      <Route exact path="/books/:id/destroy" component={BookDestroy} />

      <Route exact path="/publications/new" component={PublicationNew} />
      <Route exact path="/publications" component={PublicationIndex} />
      <Route exact path="/publications/:id" component={PublicationShow} />
      <Route exact path="/publications/:id/edit" component={PublicationEdit} />
      <Route exact path="/publications/:id/destroy" component={PublicationDestroy} />
      
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
    </Switch>
  );
}

export default Routes;
