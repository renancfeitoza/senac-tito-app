import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LandPage from "./App"
import Login from "./Login"
import Profile from "./Profile"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={LandPage} />
      <Route path="/Login" component={Login} />
      <Route path="/Profile" component={Profile} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();