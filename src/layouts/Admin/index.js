
import React from "react";
import { useLocation, Route, Switch, Redirect, useHistory } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components

import siteSettings from "../../Constants/Admin/siteSettings";
import routes from '../../routes';
import Sidebar from '../../components/Admin/Sidebar/Sidebar';
import AdminFooter from '../../components/Admin/Footers/AdminFooter.js';
import AdminNavbar from '../../components/Admin/Navbars/AdminNavbar';
import "../../assets/plugins/nucleo/css/nucleo.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "../../assets/scss/argon-dashboard-react.scss"
import "../../assets/scss/custom.scss"


const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);
  if (localStorage.getItem("TOKEN")) {
    // console.log(localStorage.getItem("TOKEN"));
  } else {
    var pathName = window.location.pathname;
    if (location.pathname.indexOf('/admin') > -1) {
      history.push("/login");
    }
  }
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        if (prop.subMenu) {
          return prop.subMenu.map((prop, key) => {
            return (
              <Route exact path={prop.layout + prop.path} component={prop.component} key={key} />
            );
          });
        }
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };


  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/",
          imgSrc: siteSettings.SiteSettings[0].SITE_LOGO,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={siteSettings.SiteSettings[0].SITE_TITLE}
        />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="/admin" to="/admin/index" />
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
