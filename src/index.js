/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import AdminLayout from './layouts/Admin';
import Auth from "./layouts/Auth";
import Home from "./Views/Public/Home";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <Auth {...props} />} />
      <Route path="/" exact render={(props) => <Home {...props} />} />
      {/* <Redirect from="/" to="/admin/index" /> */}
      <Redirect from="/login" to="/auth/login" />
      <Redirect from="/resetPassword" to="/auth/resetPassword" />
      <Redirect from="/editProfile" to="/admin/editProfile" />
      <Redirect from="/public/home" to="/" />
      <Redirect from="/home" to="/" />
      {/* <Route path="/auth" render={(props) => <AuthLayout {...props} />} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
