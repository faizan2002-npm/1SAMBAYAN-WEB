
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from './layouts/Admin';
import Auth from "./layouts/Auth";
import PublicLayout from './layouts/Public/PublicLayout';
import routes from "./routes";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// console.log(window.location.pathname);
const getRoutes = (routes) => {
  return routes.map((prop, key) => {
    console.log([
      {
        'path': prop.layout + prop.path,
        "component": prop.component,
        "key": key
      }
    ]);
    return (
      <Route exact path={prop.layout + prop.path} component={prop.component} key={key} />
    );
  });
};
ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <Auth {...props} />} />
      <Route path="/public" exact render={(props) => <PublicLayout {...props} />} />
      {
        getRoutes(routes)
      }

      {/* <Route component={NotFound} /> */}
      <Redirect from="/editProfile" to="/admin/editProfile" />
      <Redirect from="/auth" to="/auth/login" />
      <Redirect from="/login" to="/auth/login" />
      <Redirect from="/resetPassword" to="/auth/resetPassword" />
      <Redirect from="/otpAuthentication" to="/auth/otpAuthentication" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
